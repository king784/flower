let img;
let sorted;
let index = 0;
let timer = 0;
let awesome = 10;
let redd;
let greeen;
let bluee;
let startCol = redd;
let currentCol = redd;
let nextCol = greeen;
let lerppi = 0;

function preload()
{
  img = loadImage('assets/flower.jpg');
}
function setup() 
{
  createCanvas(800, 600);
  img.resize(800, 600);
  // sorted = createImage(img.width, img.height, RGB);
  // sorted = img.get();
  // sorted.loadPixels();
  redd = color(240, 75, 75);
  greeen = color(75, 240, 75);
  bluee = color(75, 75, 240);
  currentCol = redd;
  startCol = redd;
  nextCol = greeen;
}

function draw() 
{
  // let record = -1;
  // let selectedPixel = index;
  // for (let j = index; j < sorted.pixels.length; j++) 
  // {
  //   let col = sorted.pixels[j];
  //   let b = hue(col);
  //   if(b > record)
  //   {
  //     selectedPixel = j;
  //     record = b;
  //   }
  // }
  // let temp = sorted.pixels[index];
  // sorted.pixels[index] = sorted.pixels[selectedPixel];
  // sorted.pixels[selectedPixel] = temp;
  // if(index < sorted.pixels.length-1)
  // {
  //   index++;
  // }

  // sorted.updatePixels();

//   lerppi += 1;
//   if(lerppi == 9)
//   {
//     lerppi = 0;
//     if(nextCol == color(75, 240, 75))
//     {
//       startCol = color(75, 240, 75);
//       nextCol = color(75, 75, 240);
//     }
//     else if(nextCol == color(75, 75, 240))
//     {
//       startCol = color(75, 75, 240);
//       nextCol = color(240, 75, 75);
//     }
//     else
//     {
//       startCol = color(240, 75, 75);
//       nextCol = color(75, 240, 75);
//     }
//   }

// currentCol = lerpColor(startCol, nextCol, lerppi*0.1);

  timer += 1;
  if(timer == 2)
  {
    timer = 0;
    if(awesome > 0)
    {
      awesome -= 1;
    }
  }

  background(0);
  //tint(currentCol);
  image(img, 0, 0);
  filter(BLUR, awesome);
}