import * as THREE from 'three'

function ScreenShake() {
  return {
    enabled: false,
    _timestampStart: undefined,
    _timestampEnd: undefined,
    _startPoint: undefined,
    _endPoint: undefined,
    snowEnabled: false,

    // update(camera) must be called in the render loop; it repositions the
    // camera according to the requested shake.
    update: function update(camera) {
      if (this.enabled === true) {
        const now = Date.now();
        if (this._timestampEnd > now) {
          const interval = (now - this._timestampStart) / (this._timestampEnd - this._timestampStart);
          this.computePosition(camera, interval);
        } else {
          camera.position.copy(this._startPoint);
          this.enabled = false;
          this.snowEnabled = true;
        }
      }
    },

    // vecToAdd is the camera position offset at the climax of the shake.
    shake: function shake(camera, vecToAdd, milliseconds) {
      this.enabled = true;
      this.snowEnabled = false;
      this._timestampStart = Date.now();
      this._timestampEnd = this._timestampStart + milliseconds;
      this._startPoint = new THREE.Vector3().copy(camera.position);
      this._endPoint = new THREE.Vector3().addVectors(camera.position, vecToAdd);
    },

    computePosition: function computePosition(camera, interval) {
      let position = 0;
      if (interval < 1) {
        position = Math.sin(interval * Math.PI * 8) * Math.exp(-interval * 6);
      }
      camera.position.lerpVectors(this._startPoint, this._endPoint, position);
    },
  }
}

export default ScreenShake
