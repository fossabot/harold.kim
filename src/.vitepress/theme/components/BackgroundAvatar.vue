<template>
  <Renderer
    ref="renderer"
    antialias
    resize="window"
    :orbit-ctrl="{
      enableDamping: true,
      dampingFactor: 0.5,
      autoRotate: true,
      enabled: false,
    }"
  >
    <Camera
      ref="camera"
      :position="{x: 0, y: 90, z: 200}"
    />
    <Scene background="#008004" ref="scene">
      <AmbientLight></AmbientLight>
      <FbxModel
        src="/stypr.z"
        ref="stypr"
        @load="showAvatar"
      />
    </Scene>
  </Renderer>
</template>
<script type="module">
  import { AnimationMixer, Clock, Fog, GridHelper } from 'three';
  import {
    AmbientLight,
    Camera,
    FbxModel,
    Renderer,
    Plane,
    Scene,
  } from 'troisjs';

  export default {
    components: {
      AmbientLight,
      Camera,
      FbxModel,
      Renderer,
      Plane,
      Scene,
    },
    methods: {
      showAvatar(model){
        // Animations from https://mixamo.com/
        // Respective Copyrights applied for the Avatar.
        // The avatar used for this website is a PAID avatar.
        // Copying/Duplicating Avatar is strictly prohibited.
        this.mixer = new AnimationMixer(model);
        const stypr = this.$refs.stypr.scene;
        const action = this.mixer.clipAction(model.animations[0]);
        action.play();
        // Set ambientlight
        model.traverse(o => {
            if (o.isMesh){
                const asArray = Array.isArray(o.material) ? o.material : [o.material]
                asArray.forEach(mat => mat.metalness = 0)
            }
        })
        // Enable clock to set animation
        this.clock = new Clock();
        this.$refs.renderer.onBeforeRender(this.updateMixer);
        stypr.visible = true;
      },
      updateMixer() {
        this.mixer.update(this.clock.getDelta());
      },
    },
    mounted() {
      const scene = this.$refs.scene.scene;
      const grid = new GridHelper(20000, 1000, 0, 0);
      const stypr = this.$refs.stypr.scene;
      stypr.visible = false;
      grid.material.opacity = 0.1;
      grid.material.transparent = true;
      this.$refs.scene.add(grid);
      scene.fog = new Fog(0x004080, 300, 1000);
      scene.translateY(-60);
    },
    updated() {
      const scene = this.$refs.scene.scene;
      const camera = this.$refs.camera;
      if (camera.camera) {
        // Changing position x and z can change the location of the Camera
        camera.camera.position.y = 0;
      }
      const el = this.$refs.container;
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    },
  }
</script>
