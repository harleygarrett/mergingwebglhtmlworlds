void main() {
  vec3 newposition = position;
  newposition.z += 0.1 * sin(position.x * 15.);

  gl_Position = projectionMatrix * modelViewMatrix * vec4(newposition, 1.0);
}