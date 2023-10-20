varying float vNoise;

void main() {
  vec3 colour1 = vec3(.9, .7, 1.);
  vec3 colour2 = vec3(0., 0., 0.9);
  vec3 colour3 = mix(colour1, colour2, 0.5 * (vNoise + 1.0));
  gl_FragColor = vec4(colour3, 1.);
}