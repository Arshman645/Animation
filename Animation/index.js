const canvas = document.
    getElementById('ringsCanvas');

    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    Let rings = [];
    const ringCount = 10;

    class Ring {
        constructor (x, y, radius, speed,
            color) {
                this.x = x;
                this.y = y;
                this.radius = radius;
                this.speed = speed;
                this.angel = 0;
                this.color = color;
            }
            draw() {
                ctx.beginPath();
                ctx.arc(this.x, this.y, 
                this.radius, 0, Math.PI * 2);
                this.strokeStyle = this.color;
                ctx.lineWidth = 5;
                ctx.stroke();
            }
       update(){
          this.angel += this.speed;
          this.x = canvas.width / 2 + Math.
          cos(this.angel) * (this.radius 
          / 2);
          this.y = canvas.height / 2 + Math 
          .sin(this.angel) * (this.radius 
          / 2);
          this.color = `hsl(${(this.angel * 
        10) % 360} ,100%, 50%)`;
        this.draw();
       }
    }

    function init(){
        rings = [];
        for (Let i = 0; i < ringCount; i++)
    {
        const radius = (i + 1) * 40;
        const speed = (i + 1) * 0.01;
        const color = `hsl(${Math.random( 
        ) * 360} ,100%, 50%)`;
        rings.push(new Ring(canvas.width / 2, 
          canvas.height / 2, radius, speed, color));
      }
    }
    
    function animate() {
        ctx.clearReact(0, 0, canvas.width,
            canvas.height);
            rings.forEach(ring => ring.update());
            requestAnimationFrame(animate)
    }

    init();
    animate();

    window.addEventListener('resize', ()=> 
    {
        canvas.width = window.innerWidth;
        canvas.height = window.innerWidth;

        init();
    });