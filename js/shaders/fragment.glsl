varying float vNoise;

void main() {
  gl_FragColor = vec4(vNoise,vNoise * 2.,0.0,1.);
}