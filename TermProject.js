var scene = null;

var createScene = function (canvas, engine) {
    scene = new BABYLON.Scene(engine);

    var camera = new BABYLON.ArcRotateCamera("Camera", Math.PI, Math.PI / 8, 5, BABYLON.Vector3.Zero(), scene);

    camera.attachControl(canvas, true);

    var light = new BABYLON.HemisphericLight("hemi", new BABYLON.Vector3(1, 3, 2), scene);

     /* Lets create a robot
    // Robot:
        // Head
        // chest
            // right shoulder
                // right Elbow
                // right Wrist
            // Left Shoulder
                // left Elbow
                // Left Wrist
        // Waist
            // Right Leg
            // Left Leg
        
    */
	
    var robot = BABYLON.Mesh.CreateBox("lamont", 0.0001, scene); 
    var head = BABYLON.Mesh.CreateBox("head", { width: 0.4, height: 0.4, depth: 0.4 }, scene);
    head.parent = robot;
    head.position.y = 0.6;
    head.material = new BABYLON.StandardMaterial("red", scene);
    head.material.diffuseColor = new BABYLON.Color3(0.8, 0.0, 0.0);
    var chest = BABYLON.Mesh.CreateBox("chest", { width: 1, height: 1, depth: 0.6 }, scene);
    chest.material = new BABYLON.StandardMaterial("red", scene);
    chest.material.diffuseColor = new BABYLON.Color3(0.0, 0.0, 0.8);
    //chest.scaling.y = 3;
    //chest.scaling.x = 2;
    chest.parent = robot;
	
	var waist = BABYLON.Mesh.CreateBox("waist", { width: 1, height: 0.4, depth: 0.6 }, scene);
    waist.parent = robot;
    waist.position.y = -0.7;
	waist.material = new BABYLON.StandardMaterial("red", scene);
	waist.material.diffuseColor = new BABYLON.Color3(0.0, 0.8, 0.8);
	
	var opts = { width: 0.25, height: 0.5, depth: 0.25 };
    var leftshoulder = BABYLON.Mesh.CreateBox("leftshoulder",opts, scene);
    leftshoulder.parent = chest;
    leftshoulder.position.x = -0.65;
    leftshoulder.position.y = 0.25;
    //shoulder.scaling.x = 0.25;shoulder.scaling.z = 0.5;shoulder.scaling.y = 0.5;
    leftshoulder.material = new BABYLON.StandardMaterial("shouldercolor", scene);
    leftshoulder.material.diffuseColor = new BABYLON.Color3(0.0, 0.8, 0.8);
    
    opts.depth = 0.23;opts.height = 0.4;opts.width = 0.23;
    var leftelbow = BABYLON.Mesh.CreateBox("leftelbow", opts, scene);
    leftelbow.parent = leftshoulder;
    leftelbow.position.y = -0.45;
    //elbow.scaling.y = 0.5;
    leftelbow.material = new BABYLON.StandardMaterial("elbowcolor", scene);
    leftelbow.material.diffuseColor = new BABYLON.Color3(0.8, 0.8, 0.0);
    
    opts.depth = 0.2;opts.height = 0.3;opts.width = 0.2;
    var leftwrist = BABYLON.Mesh.CreateBox("leftwrist", opts, scene);
    leftwrist.parent = leftelbow;
    leftwrist.position.y = -0.35;
    //wrist.scaling.y = 0.75;
    leftwrist.material = new BABYLON.StandardMaterial("elbowcolor", scene);
    leftwrist.material.diffuseColor = new BABYLON.Color3(0.0, 0.8, 0.0);
	
	
	var opts = { width: 0.25, height: 0.5, depth: 0.25 };
    var rightshoulder = BABYLON.Mesh.CreateBox("rightshoulder",opts, scene);
    rightshoulder.parent = chest;
    rightshoulder.position.x = 0.65;
    rightshoulder.position.y = 0.25;
    //shoulder.scaling.x = 0.25;shoulder.scaling.z = 0.5;shoulder.scaling.y = 0.5;
    rightshoulder.material = new BABYLON.StandardMaterial("shouldercolor", scene);
    rightshoulder.material.diffuseColor = new BABYLON.Color3(0.0, 0.8, 0.8);
    
    opts.depth = 0.23;opts.height = 0.4;opts.width = 0.23;
    var rightelbow = BABYLON.Mesh.CreateBox("rightelbow", opts, scene);
    rightelbow.parent = rightshoulder;
    rightelbow.position.y = -0.45;
    //elbow.scaling.y = 0.5;
    rightelbow.material = new BABYLON.StandardMaterial("elbowcolor", scene);
    rightelbow.material.diffuseColor = new BABYLON.Color3(0.8, 0.8, 0.0);
    
    opts.depth = 0.2;opts.height = 0.3;opts.width = 0.2;
    var rightwrist = BABYLON.Mesh.CreateBox("rightwrist", opts, scene);
    rightwrist.parent = rightelbow;
    rightwrist.position.y = -0.35;
    //wrist.scaling.y = 0.75;
    rightwrist.material = new BABYLON.StandardMaterial("elbowcolor", scene);
    rightwrist.material.diffuseColor = new BABYLON.Color3(0.0, 0.8, 0.0);
	
	
	var opts = { width: 0.25, height: 0.5, depth: 0.25 };
    var lefthip = BABYLON.Mesh.CreateBox("lefthip",opts, scene);
    lefthip.parent = waist;
    lefthip.position.x = -0.35;
    lefthip.position.y = -0.4;
    //shoulder.scaling.x = 0.25;shoulder.scaling.z = 0.5;shoulder.scaling.y = 0.5;
    lefthip.material = new BABYLON.StandardMaterial("hipcolor", scene);
    lefthip.material.diffuseColor = new BABYLON.Color3(0.0, 0.8, 0.8);
    
    opts.depth = 0.23;opts.height = 0.4;opts.width = 0.23;
    var leftknee = BABYLON.Mesh.CreateBox("leftknee", opts, scene);
    leftknee.parent = lefthip;
    leftknee.position.y = -0.45;
    //elbow.scaling.y = 0.5;
    leftknee.material = new BABYLON.StandardMaterial("kneecolor", scene);
    leftknee.material.diffuseColor = new BABYLON.Color3(0.8, 0.8, 0.0);
    
    opts.depth = 0.2;opts.height = 0.3;opts.width = 0.2;
    var leftankle = BABYLON.Mesh.CreateBox("leftankle", opts, scene);
    leftankle.parent = leftknee;
    leftankle.position.y = -0.35;
    //wrist.scaling.y = 0.75;
    leftankle.material = new BABYLON.StandardMaterial("anklecolor", scene);
    leftankle.material.diffuseColor = new BABYLON.Color3(0.0, 0.8, 0.0);
	
	
	var opts = { width: 0.25, height: 0.5, depth: 0.25 };
    var righthip = BABYLON.Mesh.CreateBox("righthip",opts, scene);
    righthip.parent = waist;
    righthip.position.x = 0.35;
    righthip.position.y = -0.4;
    //shoulder.scaling.x = 0.25;shoulder.scaling.z = 0.5;shoulder.scaling.y = 0.5;
    righthip.material = new BABYLON.StandardMaterial("hipcolor", scene);
    righthip.material.diffuseColor = new BABYLON.Color3(0.0, 0.8, 0.8);
    
    opts.depth = 0.23;opts.height = 0.4;opts.width = 0.23;
    var rightknee = BABYLON.Mesh.CreateBox("rightknee", opts, scene);
    rightknee.parent = righthip;
    rightknee.position.y = -0.45;
    //elbow.scaling.y = 0.5;
    rightknee.material = new BABYLON.StandardMaterial("kneecolor", scene);
    rightknee.material.diffuseColor = new BABYLON.Color3(0.8, 0.8, 0.0);
    
    opts.depth = 0.2;opts.height = 0.3;opts.width = 0.2;
    var rightankle = BABYLON.Mesh.CreateBox("rightankle", opts, scene);
    rightankle.parent = rightknee;
    rightankle.position.y = -0.35;
    //wrist.scaling.y = 0.75;
    rightankle.material = new BABYLON.StandardMaterial("anklecolor", scene);
    rightankle.material.diffuseColor = new BABYLON.Color3(0.0, 0.8, 0.0);
    
	rotatexp45(rightshoulder);
	rotatexp45(rightelbow);
	//setTimeout(rotatexp45(rightshoulder),5000);

	
    return scene;
}

function rotatexp45(bodypart){
		//Create a scaling animation at 30 FPS
    var animation1 = new BABYLON.Animation("Animation1", "rotation.x", 30, BABYLON.Animation.ANIMATIONTYPE_FLOAT,
                                                                    BABYLON.Animation.ANIMATIONLOOPMODE_CYCLE);
    //Here we have chosen a loop mode, but you can change to :
    //  Use previous values and increment it (BABYLON.Animation.ANIMATIONLOOPMODE_RELATIVE)
    //  Restart from initial value (BABYLON.Animation.ANIMATIONLOOPMODE_CYCLE)
    //  Keep the final value (BABYLON.Animation.ANIMATIONLOOPMODE_CONSTANT)

    // Animation keys
    var keys = [];
    //At the animation key 0, the value of scaling is "1"
    keys.push({
        frame: 0,
        value: 0
    });

    //At the animation key 20, the value of scaling is "0.2"
    keys.push({
        frame: 20,
        value: .2
    });

    //At the animation key 100, the value of scaling is "1"
    keys.push({
        frame: 100,
        value: 1
    });
	
    //Adding keys to the animation object
    animation1.setKeys(keys);

    //Then add the animation object to box1
    bodypart.animations.push(animation1);

    //Finally, launch animations on box1, from key 0 to key 100 with loop activated
    scene.beginAnimation(bodypart, 0, 100, false);
}

function rotateyp45(bodypart){
		//Create a scaling animation at 30 FPS
    var animation1 = new BABYLON.Animation("Animation1", "rotation.y", 30, BABYLON.Animation.ANIMATIONTYPE_FLOAT,
                                                                    BABYLON.Animation.ANIMATIONLOOPMODE_CYCLE);
    //Here we have chosen a loop mode, but you can change to :
    //  Use previous values and increment it (BABYLON.Animation.ANIMATIONLOOPMODE_RELATIVE)
    //  Restart from initial value (BABYLON.Animation.ANIMATIONLOOPMODE_CYCLE)
    //  Keep the final value (BABYLON.Animation.ANIMATIONLOOPMODE_CONSTANT)

    // Animation keys
    var keys = [];
    //At the animation key 0, the value of scaling is "1"
    keys.push({
        frame: 0,
        value: 0
    });

    //At the animation key 20, the value of scaling is "0.2"
    keys.push({
        frame: 20,
        value: .2
    });

    //At the animation key 100, the value of scaling is "1"
    keys.push({
        frame: 100,
        value: 1
    });
	
    //Adding keys to the animation object
    animation1.setKeys(keys);

    //Then add the animation object to box1
    bodypart.animations.push(animation1);

    //Finally, launch animations on box1, from key 0 to key 100 with loop activated
    scene.beginAnimation(bodypart, 0, 100, false);
}

function rotatezp45(bodypart){
		//Create a scaling animation at 30 FPS
    var animation1 = new BABYLON.Animation("Animation1", "rotation.z", 30, BABYLON.Animation.ANIMATIONTYPE_FLOAT,
                                                                    BABYLON.Animation.ANIMATIONLOOPMODE_CYCLE);
    //Here we have chosen a loop mode, but you can change to :
    //  Use previous values and increment it (BABYLON.Animation.ANIMATIONLOOPMODE_RELATIVE)
    //  Restart from initial value (BABYLON.Animation.ANIMATIONLOOPMODE_CYCLE)
    //  Keep the final value (BABYLON.Animation.ANIMATIONLOOPMODE_CONSTANT)

    // Animation keys
    var keys = [];
    //At the animation key 0, the value of scaling is "1"
    keys.push({
        frame: 0,
        value: 0
    });

    //At the animation key 20, the value of scaling is "0.2"
    keys.push({
        frame: 20,
        value: .2
    });

    //At the animation key 100, the value of scaling is "1"
    keys.push({
        frame: 100,
        value: 1
    });
	
    //Adding keys to the animation object
    animation1.setKeys(keys);

    //Then add the animation object to box1
    bodypart.animations.push(animation1);

    //Finally, launch animations on box1, from key 0 to key 100 with loop activated
    scene.beginAnimation(bodypart, 0, 100, false);
}

function rotatexn45(bodypart){
		//Create a scaling animation at 30 FPS
    var animation1 = new BABYLON.Animation("Animation1", "rotation.x", 30, BABYLON.Animation.ANIMATIONTYPE_FLOAT,
                                                                    BABYLON.Animation.ANIMATIONLOOPMODE_CYCLE);
    //Here we have chosen a loop mode, but you can change to :
    //  Use previous values and increment it (BABYLON.Animation.ANIMATIONLOOPMODE_RELATIVE)
    //  Restart from initial value (BABYLON.Animation.ANIMATIONLOOPMODE_CYCLE)
    //  Keep the final value (BABYLON.Animation.ANIMATIONLOOPMODE_CONSTANT)

    // Animation keys
    var keys = [];
    //At the animation key 0, the value of scaling is "1"
    keys.push({
        frame: 0,
        value: 0
    });

    //At the animation key 20, the value of scaling is "0.2"
    keys.push({
        frame: 20,
        value: -.2
    });

    //At the animation key 100, the value of scaling is "1"
    keys.push({
        frame: 100,
        value: -1
    });
	
    //Adding keys to the animation object
    animation1.setKeys(keys);

    //Then add the animation object to box1
    bodypart.animations.push(animation1);

    //Finally, launch animations on box1, from key 0 to key 100 with loop activated
    scene.beginAnimation(bodypart, 0, 100, false);
}

function rotateyn45(bodypart){
		//Create a scaling animation at 30 FPS
    var animation1 = new BABYLON.Animation("Animation1", "rotation.y", 30, BABYLON.Animation.ANIMATIONTYPE_FLOAT,
                                                                    BABYLON.Animation.ANIMATIONLOOPMODE_CYCLE);
    //Here we have chosen a loop mode, but you can change to :
    //  Use previous values and increment it (BABYLON.Animation.ANIMATIONLOOPMODE_RELATIVE)
    //  Restart from initial value (BABYLON.Animation.ANIMATIONLOOPMODE_CYCLE)
    //  Keep the final value (BABYLON.Animation.ANIMATIONLOOPMODE_CONSTANT)

    // Animation keys
    var keys = [];
    //At the animation key 0, the value of scaling is "1"
    keys.push({
        frame: 0,
        value: 0
    });

    //At the animation key 20, the value of scaling is "0.2"
    keys.push({
        frame: 20,
        value: -.2
    });

    //At the animation key 100, the value of scaling is "1"
    keys.push({
        frame: 100,
        value: -1
    });
	
    //Adding keys to the animation object
    animation1.setKeys(keys);

    //Then add the animation object to box1
    bodypart.animations.push(animation1);

    //Finally, launch animations on box1, from key 0 to key 100 with loop activated
    scene.beginAnimation(bodypart, 0, 100, false);
}

function rotatezn45(bodypart){
		//Create a scaling animation at 30 FPS
    var animation1 = new BABYLON.Animation("Animation1", "rotation.z", 30, BABYLON.Animation.ANIMATIONTYPE_FLOAT,
                                                                    BABYLON.Animation.ANIMATIONLOOPMODE_CYCLE);
    //Here we have chosen a loop mode, but you can change to :
    //  Use previous values and increment it (BABYLON.Animation.ANIMATIONLOOPMODE_RELATIVE)
    //  Restart from initial value (BABYLON.Animation.ANIMATIONLOOPMODE_CYCLE)
    //  Keep the final value (BABYLON.Animation.ANIMATIONLOOPMODE_CONSTANT)

    // Animation keys
    var keys = [];
    //At the animation key 0, the value of scaling is "1"
    keys.push({
        frame: 0,
        value: 0
    });

    //At the animation key 20, the value of scaling is "0.2"
    keys.push({
        frame: 20,
        value: -.2
    });

    //At the animation key 100, the value of scaling is "1"
    keys.push({
        frame: 100,
        value: -1
    });
	
    //Adding keys to the animation object
    animation1.setKeys(keys);

    //Then add the animation object to box1
    bodypart.animations.push(animation1);

    //Finally, launch animations on box1, from key 0 to key 100 with loop activated
    scene.beginAnimation(bodypart, 0, 100, false);
}


var rotx = 1, roty = 1, rotz = 1;

function handleScroll(sel) {
    var part = $('#bodypart').find(':selected').val();
    var nde = scene.getNodeByName(part);
    rotx = $('input[name="rotX"]').get(0).valueAsNumber;
    roty = $('input[name="rotY"]').get(0).valueAsNumber;
    rotz = $('input[name="rotZ"]').get(0).valueAsNumber;
    nde.rotation.x = degToRad(rotx);
    nde.rotation.y = degToRad(roty);
    nde.rotation.z = degToRad(rotz);
}

function degToRad(degrees) {
    return degrees * Math.PI / 180;
}

function main() {
    var canvas = document.getElementById("renderCanvas");
    var engine = new BABYLON.Engine(canvas, true);

    engine.runRenderLoop(function () {
        scene.render();
    });
    var scene = new createScene(canvas, engine);
    
    // Resize
    window.addEventListener("resize", function () {
        engine.resize();
    });
}