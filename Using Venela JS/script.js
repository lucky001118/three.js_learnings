// const scene = new THREE.Scene();
// const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

// const { Color } = require("three/src/Three.Core.js");

// const geometry = new THREE.BoxGeometry( 1, 1, 1 );
// const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
// const cube = new THREE.Mesh( geometry, material );
// scene.add( cube );

// camera.position.z = 5;

// const canvas = document.querySelector("#draw")
// const renderer = new THREE.WebGLRenderer({canvas});
// renderer.setSize( window.innerWidth, window.innerHeight );

// function animate() {
//     window.requestAnimationFrame(animate)
//   renderer.render( scene, camera );

//   cube.rotation.x += 0.01;
//   cube.rotation.y += 0.01;
// }
// animate()


let scene = new THREE.Scene();  // creating the scene in #D world
let camera = new THREE.PerspectiveCamera(65,window.innerWidth / window.innerHeight,0.1,100);  //creating the camera in the 3D world the camera view which all things which we see.
camera.position.z = 5;   //Setting the position of the camera
scene.add(camera);   // adding the camera in the scene

let box = new THREE.BoxGeometry(1,1,1);   //taking a geometry box with the dimention of x,y,z=1,1,1
let material = new THREE.MeshBasicMaterial({color:"red"});  //setting material quality and color of material
let mesh = new THREE.Mesh(box,material);  //creating the mesh using the material and box  --> now our mesh is a box with dimention of 1,1,1 with red color and basic material

// mesh.position.z = 2;    //This is works for the position on x,y,z respectively which position you give
// mesh.rotation.y = 1.2;  // for the rotation it will rotate the mesh in any position you want, you have to give the position in x,y,z
// mesh.scale.y = 2.3   // the scale will scales any specific position that you want in the any axis in the x,y,z

scene.add(mesh);  // adding the mesh in the scene

const canvas = document.querySelector('canvas');   //getting our canvas 
let renderer = new THREE.WebGLRenderer({canvas: canvas, antialias: true})  //getting the renderer things to render the canvas
renderer.setSize(window.innerWidth,window.innerHeight);  //setting the size of render window
renderer.render(scene,camera)   // finally rendering the scene and camera, it give a picture 

let clock = new THREE.Clock();  //gives the time in the milisecond till the application start
//creating the animation function to animate the mesh
function animate(){
    window.requestAnimationFrame(animate);
    renderer.render(scene,camera);
    mesh.rotation.y = clock.getElapsedTime();  //animation done by rotation on the THREE js clock time. 
}
animate();