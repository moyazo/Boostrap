const Game = {
    canvas: undefined,
    ctx: undefined,
    fps: 60, 
    keys: {
        TOP_KEY: 38,
        SPACE: 32
    },

    init: function() {
        this.canvas = document.getElementById('canvas')
        this.ctx = canvas.getContext('2d')

        this.canvas.width = window.innerWidth
        this.canvas.height = window.innerHeight

        this.start()
    },

    start: function() {
        this.reset()

        // Borra y pinta el canvas this.fps veces por segundo
        this.interval = setInterval(() => {
            this.clear()

            // Mecanismo para generar acciones cada X frames
            this.frameCounter++;

            // Generar obstaculo cada 50 frames
            if(this.frameCounter % 50 === 0)
                this.generateObstacle()
    
            if(this.isCollision()) 
                this.gameOver()
            
            this.drawAll()
            this.moveAll()

            this.clearObstacles()
        }, 1000 / this.fps)
    },

    reset: function() {
        this.background = new Background(this.canvas.width, this.canvas.height, this.ctx) 
        this.player = new Player(this.canvas.width, this.canvas.height, this.keys, this.ctx)
        
        this.frameCounter = 0
        
        this.obstacles = []
    },

    clear: function () {
        this.ctx.clearRect(0,0,this.canvas.width, this.canvas.height);
    },

    moveAll: function() {
        this.background.move()
        this.player.move()

        this.obstacles.forEach(obstacle => {
            obstacle.move()
        })
    },


    drawAll: function () {
        this.background.draw()
        this.player.draw(this.frameCounter)

        this.obstacles.forEach(obstacle => {
            obstacle.draw()
        })
    },

    generateObstacle: function() {
        this.obstacles.push(new Obstacle(this.canvas.width, this.player.h ,this.player.y0, this.ctx))
    },

    clearObstacles: function () {
        this.obstacles = this.obstacles.filter((obstacle) => obstacle.x + obstacle.w >= 0)
    },

    isCollision() {
        return this.obstacles.some((obstacle) => {
            return (this.player.x + this.player.w >= obstacle.x &&
                    this.player.x <= obstacle.x + obstacle.w &&
                    this.player.y + this.player.h - 20 >= obstacle.y &&
                    this.player.y <= obstacle.y + obstacle.h
            )
        })
    },

    //  
    stop() {
        clearInterval(this.interval)
    },
    
    gameOver() {
        this.stop()

        if(confirm("Te has chocado amigo, (quiéres jugar de nuevo?"))
            this.start()
    }
}