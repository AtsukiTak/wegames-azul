import {
  Scene,
  PerspectiveCamera,
  WebGLRenderer,
  BoxGeometry,
  MeshBasicMaterial,
  Mesh,
  BufferGeometry,
  Line,
  LineBasicMaterial,
  Vector3,
} from "three";

const scene = new Scene();
const camera = new PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

const renderer = new WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const cube = (() => {
  const geometry = new BoxGeometry();
  const material = new MeshBasicMaterial({ color: 0x00ff00 });
  return new Mesh(geometry, material);
})();
scene.add(cube);

const line = (() => {
  const material = new LineBasicMaterial({ color: 0x0000ff });
  const points = [
    new Vector3(-10, 0, 0),
    new Vector3(0, 10, 0),
    new Vector3(10, 0, 0),
  ];
  const geometry = new BufferGeometry().setFromPoints(points);
  return new Line(geometry, material);
})();
scene.add(line);

camera.position.z = 100;

const animate = () => {
  window.requestAnimationFrame(animate);
  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;
  renderer.render(scene, camera);
};
animate();
