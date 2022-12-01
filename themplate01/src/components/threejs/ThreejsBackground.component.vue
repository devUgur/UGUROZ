<template>
  <div id="threejs-background-component">
    <span id="scrollProgress"></span>
  </div>
</template>

<script>
import * as THREE from 'three'
export default {
  name: "ThreejsBackgroundComponent",
  data(){
    return {
      _scene: null,
      scrollPercentage: 0,
    }
  },
  mounted() {


    // Scene
    let scene, renderer, camera, ambientLight, pointLight, cube, scrollPercent,
        light1, light2, light3, light4, object;
    let mouse = {
      x: 0,
      y: 0
    };
    const clock = new THREE.Clock();
    scene = new THREE.Scene();

    const gridHelper = new THREE.GridHelper(100, 100, 0xaec6cf, 0xaec6cf)
    scene.add(gridHelper)
    //scene.background = new THREE.Color(0x000000);

    // Renderer
    renderer = new THREE.WebGLRenderer({antialias:true});
    renderer.setSize( window.innerWidth, window.innerHeight );
    document.getElementById('threejs-background-component').appendChild(renderer.domElement);

    // Camera
    let screenWidth = window.innerWidth
    let screenHeight = window.innerHeight
    let viewAngle = 75;
    let nearDistance = 0.1
    let farDistance = 500;
    const geometry = new THREE.BoxGeometry()
    const material = new THREE.MeshBasicMaterial({
      color: 0x00ff00,
      wireframe: true,
    })
    camera = new THREE.PerspectiveCamera(viewAngle, screenWidth / screenHeight, nearDistance, farDistance);
    camera.position.z = 100;
    camera.position.x = 20;
    camera.lookAt(scene.position);

    // Lights
    // Ambient light
    ambientLight = new THREE.AmbientLight(0x333333, 0.25);
    scene.add(ambientLight);

    // Point light
    pointLight = new THREE.PointLight(0xAAAAAA, 1);
    pointLight.position.set(0, 0, 0);
    pointLight.castShadow = true;
    pointLight.shadow.bias = 0.0001;
    pointLight.mapSizeWidth = 2048; // Shadow Quality
    pointLight.mapSizeHeight = 2048; // Shadow Quality
    scene.add(pointLight);

    // Cube
    let cubeGeometry = new THREE.BoxGeometry( 40, 40, 40 );
    let cubeMaterial = new THREE.MeshPhongMaterial({ // Required For Shadows
      color: 0x888888,
      specular: 0x000000,
      shininess: 70
    });
    cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
    //cube.castShadow = true;
    //cube.receiveShadow = true;
    cube.position.set(0, -20, -1);
    cube.rotation.x = 10;
    cube.rotation.y = 20;
    scene.add( cube );

    //lights

    const sphere = new THREE.SphereGeometry( 0.5, 16, 8 );

    light1 = new THREE.PointLight( 0xff0040, 2, 50 );
    light1.add( new THREE.Mesh( sphere, new THREE.MeshBasicMaterial( { color: 0xff0040 } ) ) );
    scene.add( light1 );

    light2 = new THREE.PointLight( 0x0040ff, 2, 50 );
    light2.add( new THREE.Mesh( sphere, new THREE.MeshBasicMaterial( { color: 0x0040ff } ) ) );
    scene.add( light2 );

    light3 = new THREE.PointLight( 0x80ff80, 2, 50 );
    light3.add( new THREE.Mesh( sphere, new THREE.MeshBasicMaterial( { color: 0x80ff80 } ) ) );
    scene.add( light3 );

    light4 = new THREE.PointLight( 0xffaa00, 2, 50 );
    light4.add( new THREE.Mesh( sphere, new THREE.MeshBasicMaterial( { color: 0xffaa00 } ) ) );
    scene.add( light4 );

    // On mouse move
    function onMouseMove(event) {
      event.preventDefault();
      mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

      //console.log(mouse.x,mouse.y);
      let vector = new THREE.Vector3(mouse.x, mouse.y, 0.5);
      vector.unproject(camera);
      let dir = vector.sub(camera.position).normalize();
      let distance = -camera.position.z / dir.z;
      let pos = camera.position.clone().add(dir.multiplyScalar(distance));
      pointLight.position.copy(pos);
    };

    // On resize
    function onResize() {
      let width = window.innerWidth;
      let height = window.innerHeight;
      renderer.setSize(width, height);
      camera.aspect = width/height;
      camera.updateProjectionMatrix();
    }

    /* Liner Interpolation
 * lerp(min, max, ratio)
 * eg,
 * lerp(20, 60, .5)) = 40
 * lerp(-20, 60, .5)) = 20
 * lerp(20, 60, .75)) = 50
 * lerp(-20, -10, .1)) = -.19
 */
    function lerp(x, y, a) {
      return (1 - a) * x + a * y
    }

// Used to fit the lerps to start and end at specific scrolling percentages
    function scalePercent(start, end) {
      return (scrollPercent - start) / (end - start)
    }

    const animationScripts = [];

//add an animation that flashes the cube through 100 percent of scroll
    animationScripts.push({
      start: 0,
      end: 101,
      func: () => {
        let g = material.color.g
        g -= 0.05
        if (g <= 0) {
          g = 1.0
        }
        material.color.g = g
      },
    })

//add an animation that moves the cube through first 40 percent of scroll
    animationScripts.push({
      start: 0,
      end: 40,
      func: () => {
        const time = Date.now() * 0.0005;
        camera.lookAt(cube.position)
        camera.position.set(100, -20, 20)

        cube.rotation.x += 0.01
        cube.rotation.y += 0.01

        cube.position.x = Math.sin( time * 0.7 ) * 20;
        cube.position.y = Math.cos( time * 0.5 ) * 60;
        cube.position.z = Math.cos( time * 0.3 ) * 30;
        //cube.position.z = lerp(50, Math.PI, scalePercent(0, 40))
        //console.log(cube.position.z)
      },
    })

//add an animation that rotates the cube between 40-60 percent of scroll
    animationScripts.push({
      start: 40,
      end: 60,
      func: () => {
        camera.lookAt(cube.position)
        camera.position.set(100, -20, 20);
        camera.position.y = lerp(1, 20, scalePercent(60, 80))
        cube.rotation.z = lerp(0, Math.PI, scalePercent(40, 60))
        //console.log(cube.rotation.z)
      },
    })

//add an animation that moves the camera between 60-80 percent of scroll
    animationScripts.push({
      start: 60,
      end: 80,
      func: () => {
        //camera.position.x = lerp(0, 5, scalePercent(60, 80))
        //camera.position.y = lerp(1, 5, scalePercent(60, 80))
        camera.position.set(100, -20, 20);
        camera.lookAt(cube.position)
        //console.log(camera.position.x + " " + camera.position.y)
      },
    })

//add an animation that auto rotates the cube from 80 percent of scroll
    animationScripts.push({
      start: 80,
      end: 101,
      func: () => {
        //auto rotate
        cube.rotation.x += 0.01
        cube.rotation.y += 0.01
      },
    })

    function playScrollAnimations() {
      animationScripts.forEach((a) => {
        if (scrollPercent >= a.start && scrollPercent < a.end) {
          a.func()
        }
      })
    }

    // Render Loop
    function render() {
      requestAnimationFrame( render );
      playScrollAnimations();
      //cube.rotation.x += 0.005;
      //cube.rotation.y += 0.005;

      const time = Date.now() * 0.0005;
      const delta = clock.getDelta();

      if ( object ) object.rotation.y -= 0.5 * delta;

      light1.position.x = Math.sin( time * 0.7 ) * 30;
      light1.position.y = Math.cos( time * 0.5 ) * 40;
      light1.position.z = Math.cos( time * 0.3 ) * 30;

      light2.position.x = Math.cos( time * 0.3 ) * 30;
      light2.position.y = Math.sin( time * 0.5 ) * 40;
      light2.position.z = Math.sin( time * 0.7 ) * 30;

      light3.position.x = Math.sin( time * 0.7 ) * 30;
      light3.position.y = Math.cos( time * 0.3 ) * 40;
      light3.position.z = Math.sin( time * 0.5 ) * 30;

      light4.position.x = Math.sin( time * 0.3 ) * 30;
      light4.position.y = Math.cos( time * 0.7 ) * 40;
      light4.position.z = Math.sin( time * 0.5 ) * 30;

      renderer.render( scene, camera );
    }

    render();

    // Listeners
    document.addEventListener('mousemove', onMouseMove, false);
    window.addEventListener('resize', onResize);

    document.body.onscroll = () => {
      //calculate the current scroll progress as a percentage
      scrollPercent = ((document.documentElement.scrollTop || document.body.scrollTop) / ((document.documentElement.scrollHeight || document.body.scrollHeight) - document.documentElement.clientHeight)) * 100;

      document.getElementById('scrollProgress').innerText = 'Scroll Progress : ' + scrollPercent.toFixed(2);
    }
  }
}
</script>

<style scoped>
#threejs-background-component{
  position: fixed;
  height: 100vh;
  width: 100%;
  left: 0; right: 0; top: 0; bottom: 0;

  background-color: #040507;
}

#scrollProgress{
  position: absolute;
  bottom: 0;
}
</style>