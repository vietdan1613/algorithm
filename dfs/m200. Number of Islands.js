//https://leetcode.com/problems/number-of-islands/

/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
    let m = grid.length
    let n = grid[0].length
    visited = new Array(m).fill().map(() => [])
    let count = 0
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (!visited[i][j] && grid[i][j] == 1) {
                dfs(grid, i, j)
                count++
            }
        }
    }
    return count
};

let dx = [0, 1, 0, -1]
let dy = [1, 0, -1, 0]

var dfs = function (grid, i, j) {
    visited[i][j] = true
    for (let k = 0; k < 4; k++) {
        let x = i + dx[k]
        let y = j + dy[k]
        if (x >= 0 && y >= 0 && y < grid[0].length && x < grid.length && !visited[x][y] && grid[x][y] == 1) {
            dfs(grid, x, y)
        }
    }
}

let grid = [
    ["1","1","0","0","0"],
    ["1","1","0","0","0"],]
let a = numIslands(grid)
''