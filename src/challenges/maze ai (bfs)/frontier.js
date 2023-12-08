import Node from "./node.js";

class frontier{
    constructor(maze, agent, goal) {
        this.maze = maze;
        this.agent = agent;
        this.goal = goal;
        this.choices = [];
        this.explored = [];
        this.directions = [
            [0, -1],
            [1, 0],
            [0, 1],
            [-1, 0]
        ]
        this.steps = 0;
        this.win = false;
        this.algorithm = 0;
    }
    moveAgent(x, y) {
        this.maze[this.agent.y][this.agent.x] = -2;
        this.maze[y][x] = -1;
        this.agent.x = x;
        this.agent.y = y;
        this.checkWin();
    }
    explore() {
        if (this.win) return;
        
        const noOfTiles = this.getAvailableTiles();

        if (noOfTiles == 0) {
            this.maze[this.agent.y][this.agent.x] = -2;
            this.agent.x = this.choices[0].x;
            this.agent.y = this.choices[0].y;
        }

        if (this.algorithm == 0) {
            this.queueRemove(); //dfs
        } else if (this.algorithm == 1) {
            this.stackRemove(); //bfs
        }

    }
    stackRemove() {
        const firstNode = this.choices.shift();
        this.explored.push(firstNode);
        this.moveAgent(firstNode.x, firstNode.y);
    }
    queueRemove() {
        const lastNode = this.choices.pop();
        this.explored.push(lastNode);
        this.moveAgent(lastNode.x, lastNode.y);    
    }
    checkWin() {
        if (this.agent.x == this.goal.x && this.agent.y == this.goal.y) {
            let node = this.explored[this.explored.length - 1];
            while (node != undefined) {
                this.maze[node.y][node.x] = -3;
                node = node.parent;
            }
            this.maze[this.agent.y][this.agent.x] = -1;
            this.win = true;
        }
    }
    getAvailableTiles() {
        let availableTiles = 0;
    
        for (let i = 0; i < this.directions.length; i++) {
            const cellX = this.agent.x + this.directions[i][0];
            const cellY = this.agent.y + this.directions[i][1];
            
            if (cellX < 0 || cellY < 0) continue;
            if (cellX >= this.maze[0][0].length || cellY >= this.maze.length) continue;
            
            if (this.maze[cellY][cellX] == 0 || this.maze[cellY][cellX] == 2) {
                const node = new Node(this.explored[this.explored.length - 1], cellX, cellY);
                this.choices.push(node);
                availableTiles++;
            }
        }
        return availableTiles;
    }
}

export default frontier;