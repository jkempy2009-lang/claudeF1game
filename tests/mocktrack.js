// A featureless, infinitely wide asphalt plane that satisfies the interface Car needs from Track.
export class FlatTrack {
  constructor() {
    this.z = new Float64Array(4);
    this.slope = new Float64Array(4);
    this.N = 4;
    this.length = 1e9;
  }
  project(px, py, hint, out) {
    out.i = 1; out.t = 0; out.s = px; out.d = 0; out.dist = 0;
    return out;
  }
  surface() { return 0; }
  at() { return 0; }
  hdgAt() { return 0; }
}
