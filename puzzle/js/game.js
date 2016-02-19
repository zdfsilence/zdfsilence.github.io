function coord(puzzle){
	var side = Math.sqrt(puzzle.length),
		arr = [];
	for(var i=0;i<side;i++){
		arr.push(puzzle.slice(i*side,(i+1)*side))
	}
	return arr
}
function locateTile(arr, target){
	var side=arr.length,
		row,col;
	for(var i=0;i<side;i++){
		for(var j=0;j<side;j++){
			if(arr[i][j]==target){
				row=i;
				col=j;
				break;
			}
		}
		if(row!==undefined)break;
	}
	return [row,col]
}
function exchangeTile(curr, goal, side, oldCoor, newCoor){
	var origin,target,tmp;
	origin = oldCoor[0]*side+oldCoor[1];
	target = newCoor[0]*side+newCoor[1];
	tmp = curr[origin];
	curr.$set(origin, curr[target]);
	curr.$set(target, tmp);
	if(curr.join('') == goal.join('')){
		window.setTimeout(function(){
			alert('恭喜你完成了拼图！');
		},300);
	}
}
function moveTile(me, path, el){
	var coor = locateTile(me.coordinate, 0),
		side = me.coordinate.length,
		dire,
		newCoor;
	if(path.length===0) return;
	dire = path.shift();
	newCoor = coor.clone();
	if(dire==='U'){
		newCoor[0]--
	}
	if(dire==='D'){
		newCoor[0]++
	}
	if(dire==='L'){
		newCoor[1]--
	}
	if(dire==='R'){
		newCoor[1]++
	}
	el.addEventListener("webkitTransitionEnd", function(){
		console.log(1);
		moveTile(me, path, el);
		el.removeEventListener("webkitTransitionEnd", nextStep);
	});
	el.addEventListener("transitionend", function nextStep(){
		console.log(1);
		moveTile(me, path, el);
		el.removeEventListener("transitionend", nextStep);
	});
	exchangeTile(me.puzzles, me.goal, side, coor, newCoor);
}

var app = new Vue({
	el: '#app',
	data: {
		puzzles: [],
		goal: [],
		num: 9
	},
	computed:{
		coordinate:function(){
			return coord(this.puzzles);
		}
	},
	ready:function(){
		this.$emit('init-game');
	},
	methods:{
		moveTile:function(item){
			var side = this.coordinate.length,
				pos,row,col;

			pos = locateTile(this.coordinate, item);
			row = pos[0];
			col = pos[1];
			//detect up
			if(row>0 && this.coordinate[row-1][col]===0){
				exchangeTile(this.puzzles,this.goal,side,[row,col],[row-1,col]);
				return;
			}
			//detect down
			if(row<side-1 && this.coordinate[row+1][col]===0){
				exchangeTile(this.puzzles,this.goal,side,[row,col],[row+1,col]);
				return;
			}
			//detect left
			if(col>0 && this.coordinate[row][col-1]===0){
				exchangeTile(this.puzzles,this.goal,side,[row,col],[row,col-1]);
				return;
			}
			//detect right
			if(col<side-1 && this.coordinate[row][col+1]===0){
				exchangeTile(this.puzzles,this.goal,side,[row,col],[row,col+1]);
				return;
			}
		},
		create:function(){
			this.$emit('init-game');
		},
		solve:function(){
			var blank = locateTile(this.coordinate,0);
			var init = new Node(0, this.coordinate, blank[0], blank[1], 0);
			
			var goal = coord(this.goal);
			blank = locateTile(goal,0);
			goal = new Node(0, goal, blank[0], blank[1], 0);

			var astar = new AStar(init, goal, 0);
			// To measure time taken by the algorithm
			var startTime = new Date();
			// Execute AStar
			var result = astar.execute();
			// To measure time taken by the algorithm
			var endTime = new Date();
			alert('Completed in: ' + (endTime - startTime) + ' milliseconds');

			console.dir(result);

			var path = result.path.split('');

			this.$emit('run',path);
		}
	},
	events:{
		'init-game':function(){
			var init=[],
			goal=[];
			for(var i=0;i<this.num-1;i++){
				goal[i]=i+1;
			}
			function puzzleInit(arr){
				return arr.length>1?arr.splice(Math.floor(Math.random()*arr.length),1).concat(puzzleInit(arr)):arr
			}
			function inverseNumber(arr){
				var sum = 0;
				for(var i=0;i<arr.length-1;i++){
					for(var j=i+1;j<arr.length;j++){
						if(arr[i]>arr[j]) sum++;
					}
				}
				return sum;
			}
			//计算逆序数，只有逆序数为偶数时，拼图才有解
			do{
				init = puzzleInit(goal.clone());
			}
			while(inverseNumber(init)%2===1);
			
			goal[this.num-1]=0;
			init[this.num-1]=0;
			this.puzzles = init;
			this.goal = goal;
		},
		'run':function(path){
			console.log(path);
			var el = document.querySelector('.empty');
			moveTile(this, path, el);


		}
	}
	
	
})