class Player {
  constructor(x, y, width, height, speed) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.speed = speed;
  }

  draw(ctx) {
    ctx.fillStyle = 'blue';
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }

  update(keys) {
    if (keys.left) this.x -= this.speed;
    if (keys.right) this.x += this.speed;
    if (keys.up) this.y -= this.speed;
    if (keys.down) this.y += this.speed;

    // Check for collisions with obstacles

    // Ensure the player stays within the canvas boundaries
  }

  colisionWall(canvas) {
    if (this.x < 0) this.x = 0;
    if (this.x + this.width > canvas.width) this.x = canvas.width - this.width;
    if (this.y < 0) this.y = 0;
    if (this.y + this.height > canvas.height)
      this.y = canvas.height - this.height;
  }

  colisionObj(obstacles) {
    obstacles.forEach((obstacle) => {
      if (
        this.x <= obstacle.x + obstacle.width &&
        this.x + this.width >= obstacle.x &&
        this.y <= obstacle.y + obstacle.height &&
        this.y + this.height >= obstacle.y
      ) {
        // Calculate the overlap in the x and y directions
        var overlapX =
          Math.min(this.x + this.width, obstacle.x + obstacle.width) -
          Math.max(this.x, obstacle.x);
        var overlapY =
          Math.min(this.y + this.height, obstacle.y + obstacle.height) -
          Math.max(this.y, obstacle.y);

        // Determine which direction has the smaller overlap and move the this accordingly
        if (overlapX < overlapY) {
          if (this.x < obstacle.x) {
            this.x -= overlapX;
          } else {
            this.x += overlapX;
          }
        } else {
          if (this.y < obstacle.y) {
            this.y -= overlapY;
          } else {
            this.y += overlapY;
          }
        }
      }
    });
  }
}

export default Player;