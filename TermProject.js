var scene = null;
var robot, head, chest, waist, leftshoulder, leftelbow, leftwrist, rightshoulder,rightelbow, rightwrist,
lefthip, leftknee, leftankle, righthip,rightknee,rightankle;

var bodyparts = [];
var temp = [];
var stopflag = false;

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
	
    robot = {obj: BABYLON.Mesh.CreateBox("lamont", 0.0001, scene)}; 
	
	bodyparts.push(robot);
	
    head = {obj: BABYLON.Mesh.CreateBox("head", { width: 0.4, height: 0.4, depth: 0.4 }, scene), parent: null, child: null}
    head.obj.parent = robot.obj;
    head.obj.position.y = 0.6;
    head.obj.material = new BABYLON.StandardMaterial("red", scene);
    head.obj.material.diffuseColor = new BABYLON.Color3(0.8, 0.0, 0.0);
	bodyparts.push(head);
	
    chest = {obj: BABYLON.Mesh.CreateBox("chest", { width: 1, height: 1, depth: 0.6 }, scene), parent: null, child: []}
    chest.obj.material = new BABYLON.StandardMaterial("red", scene);
    chest.obj.material.diffuseColor = new BABYLON.Color3(0.0, 0.0, 0.8);
    //chest.scaling.y = 3;
    //chest.scaling.x = 2;
    chest.obj.parent = robot.obj;
	bodyparts.push(chest);
	
	waist = {obj: BABYLON.Mesh.CreateBox("waist", { width: 1, height: 0.4, depth: 0.6 }, scene), parent: null, child: null}
    waist.obj.parent = robot.obj;
    waist.obj.position.y = -0.7;
	waist.obj.material = new BABYLON.StandardMaterial("red", scene);
	waist.obj.material.diffuseColor = new BABYLON.Color3(0.0, 0.8, 0.8);
	bodyparts.push(waist);
	
	var opts = { width: 0.25, height: 0.5, depth: 0.25 };
    leftshoulder = {obj: BABYLON.Mesh.CreateBox("leftshoulder",opts, scene), parent: null, child: []}
    leftshoulder.obj.parent = chest.obj;
	chest.child.push(leftshoulder);
    leftshoulder.obj.position.x = -0.65;
    leftshoulder.obj.position.y = 0.25;
    //shoulder.scaling.x = 0.25;shoulder.scaling.z = 0.5;shoulder.scaling.y = 0.5;
    leftshoulder.obj.material = new BABYLON.StandardMaterial("shouldercolor", scene);
    leftshoulder.obj.material.diffuseColor = new BABYLON.Color3(0.0, 0.8, 0.8);
	bodyparts.push(leftshoulder);
    
    opts.depth = 0.23;opts.height = 0.4;opts.width = 0.23;
    leftelbow = {obj: BABYLON.Mesh.CreateBox("leftelbow",opts, scene), parent: null, child: []}
    leftelbow.obj.parent = leftshoulder.obj;
    leftelbow.obj.position.y = -0.45;
    //elbow.scaling.y = 0.5;
    leftelbow.obj.material = new BABYLON.StandardMaterial("elbowcolor", scene);
    leftelbow.obj.material.diffuseColor = new BABYLON.Color3(0.8, 0.8, 0.0);
	bodyparts.push(leftelbow);
    
    opts.depth = 0.2;opts.height = 0.3;opts.width = 0.2;
    leftwrist = {obj: BABYLON.Mesh.CreateBox("leftwrist",opts, scene), parent: null, child: []}
    leftwrist.obj.parent = leftelbow.obj;
    leftwrist.obj.position.y = -0.35;
    //wrist.scaling.y = 0.75;
    leftwrist.obj.material = new BABYLON.StandardMaterial("elbowcolor", scene);
    leftwrist.obj.material.diffuseColor = new BABYLON.Color3(0.0, 0.8, 0.0);
	bodyparts.push(leftwrist);
	
	
	var opts = { width: 0.25, height: 0.5, depth: 0.25 };
    rightshoulder = {obj: BABYLON.Mesh.CreateBox("rightshoulder",opts, scene), parent: null, child: []}
    rightshoulder.obj.parent = chest.obj;
    rightshoulder.obj.position.x = 0.65;
    rightshoulder.obj.position.y = 0.25;
    //shoulder.scaling.x = 0.25;shoulder.scaling.z = 0.5;shoulder.scaling.y = 0.5;
    rightshoulder.obj.material = new BABYLON.StandardMaterial("shouldercolor", scene);
    rightshoulder.obj.material.diffuseColor = new BABYLON.Color3(0.0, 0.8, 0.8);
	bodyparts.push(rightshoulder);
    
    opts.depth = 0.23;opts.height = 0.4;opts.width = 0.23;
    rightelbow = {obj: BABYLON.Mesh.CreateBox("rightelbow",opts, scene), parent: null, child: []}
    rightelbow.obj.parent = rightshoulder.obj;
    rightelbow.obj.position.y = -0.45;
    //elbow.scaling.y = 0.5;
    rightelbow.obj.material = new BABYLON.StandardMaterial("elbowcolor", scene);
    rightelbow.obj.material.diffuseColor = new BABYLON.Color3(0.8, 0.8, 0.0);
	bodyparts.push(rightelbow);
    
    opts.depth = 0.2;opts.height = 0.3;opts.width = 0.2;
    rightwrist = {obj: BABYLON.Mesh.CreateBox("rightwrist",opts, scene), parent: null, child: []}
    rightwrist.obj.parent = rightelbow.obj;
    rightwrist.obj.position.y = -0.35;
    //wrist.scaling.y = 0.75;
    rightwrist.obj.material = new BABYLON.StandardMaterial("elbowcolor", scene);
    rightwrist.obj.material.diffuseColor = new BABYLON.Color3(0.0, 0.8, 0.0);
	bodyparts.push(rightwrist);
	
	
	var opts = { width: 0.25, height: 0.5, depth: 0.25 };
    lefthip = {obj: BABYLON.Mesh.CreateBox("lefthip",opts, scene), parent: null, child: []}
    lefthip.obj.parent = waist.obj;
    lefthip.obj.position.x = -0.35;
    lefthip.obj.position.y = -0.4;
    //shoulder.scaling.x = 0.25;shoulder.scaling.z = 0.5;shoulder.scaling.y = 0.5;
    lefthip.obj.material = new BABYLON.StandardMaterial("hipcolor", scene);
    lefthip.obj.material.diffuseColor = new BABYLON.Color3(0.0, 0.8, 0.8);
	bodyparts.push(lefthip);
    
    opts.depth = 0.23;opts.height = 0.4;opts.width = 0.23;
    leftknee = {obj: BABYLON.Mesh.CreateBox("leftknee",opts, scene), parent: null, child: []}
    leftknee.obj.parent = lefthip.obj;
    leftknee.obj.position.y = -0.45;
    //elbow.scaling.y = 0.5;
    leftknee.obj.material = new BABYLON.StandardMaterial("kneecolor", scene);
    leftknee.obj.material.diffuseColor = new BABYLON.Color3(0.8, 0.8, 0.0);
	bodyparts.push(leftknee);
    
    opts.depth = 0.2;opts.height = 0.3;opts.width = 0.2;
    leftankle = {obj: BABYLON.Mesh.CreateBox("leftankle",opts, scene), parent: null, child: []}
    leftankle.obj.parent = leftknee.obj;
    leftankle.obj.position.y = -0.35;
    //wrist.scaling.y = 0.75;
    leftankle.obj.material = new BABYLON.StandardMaterial("anklecolor", scene);
    leftankle.obj.material.diffuseColor = new BABYLON.Color3(0.0, 0.8, 0.0);
	bodyparts.push(leftankle);
	
	
	var opts = { width: 0.25, height: 0.5, depth: 0.25 };
    righthip = {obj: BABYLON.Mesh.CreateBox("righthip",opts, scene), parent: null, child: []}
    righthip.obj.parent = waist.obj;
    righthip.obj.position.x = 0.35;
    righthip.obj.position.y = -0.4;
    //shoulder.scaling.x = 0.25;shoulder.scaling.z = 0.5;shoulder.scaling.y = 0.5;
    righthip.obj.material = new BABYLON.StandardMaterial("hipcolor", scene);
    righthip.obj.material.diffuseColor = new BABYLON.Color3(0.0, 0.8, 0.8);
	bodyparts.push(righthip);
    
    opts.depth = 0.23;opts.height = 0.4;opts.width = 0.23;
    rightknee = {obj: BABYLON.Mesh.CreateBox("rightknee",opts, scene), parent: null, child: []}
    rightknee.obj.parent = righthip.obj;
    rightknee.obj.position.y = -0.45;
    //elbow.scaling.y = 0.5;
    rightknee.obj.material = new BABYLON.StandardMaterial("kneecolor", scene);
    rightknee.obj.material.diffuseColor = new BABYLON.Color3(0.8, 0.8, 0.0);
	bodyparts.push(rightknee);
    
    opts.depth = 0.2;opts.height = 0.3;opts.width = 0.2;
    rightankle = {obj: BABYLON.Mesh.CreateBox("rightankle",opts, scene), parent: null, child: []}
    rightankle.obj.parent = rightknee.obj;
    rightankle.obj.position.y = -0.35;
    //wrist.scaling.y = 0.75;
    rightankle.obj.material = new BABYLON.StandardMaterial("anklecolor", scene);
    rightankle.obj.material.diffuseColor = new BABYLON.Color3(0.0, 0.8, 0.0);
	bodyparts.push(rightankle);
    
	//console.log(chest);
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
    bodypart.obj.animations.push(animation1);

    //Finally, launch animations on box1, from key 0 to key 100 with loop activated
    //scene.beginAnimation(bodypart.obj, 0, 100, false);
	once(bodypart, 100);
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
    bodypart.obj.animations.push(animation1);

    //Finally, launch animations on box1, from key 0 to key 100 with loop activated
    //scene.beginAnimation(bodypart.obj, 0, 100, false);
	once(bodypart, 100);
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
    bodypart.obj.animations.push(animation1);

    //Finally, launch animations on box1, from key 0 to key 100 with loop activated
    //scene.beginAnimation(bodypart.obj, 0, 100, false);
	once(bodypart, 100);
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
    bodypart.obj.animations.push(animation1);

    //Finally, launch animations on box1, from key 0 to key 100 with loop activated
    //scene.beginAnimation(bodypart.obj, 0, 100, false);
	once(bodypart, 100);
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
    bodypart.obj.animations.push(animation1);

    //Finally, launch animations on box1, from key 0 to key 100 with loop activated
    //scene.beginAnimation(bodypart.obj, 0, 100, false);
	once(bodypart, 100);
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
    bodypart.obj.animations.push(animation1);

    //Finally, launch animations on box1, from key 0 to key 100 with loop activated
    //scene.beginAnimation(bodypart.obj, 0, 100, false);
	once(bodypart, 100);
}

function swingfwdloop(obj, value){

	var side1 = new BABYLON.Animation("side1", "rotation.x", 30, BABYLON.Animation.ANIMATIONTYPE_FLOAT,
                                                                    BABYLON.Animation.ANIMATIONLOOPMODE_CYCLE);
    var keys = [];
    //At the animation key 0, the value of scaling is "1"
    keys.push({
        frame: 0,
        value: 0
    });

    //At the animation key 20, the value of scaling is "0.2"
	keys.push({
        frame: 25,
        value: value
    });
	
	keys.push({
        frame: 50,
        value: 0
    });
	
	keys.push({
        frame: 75,
        value: -value
    });
	
    //At the animation key 100, the value of scaling is "1"
    keys.push({
        frame: 100,
        value: 0
    });
	
	
    //Adding keys to the animation object
    side1.setKeys(keys);

    //Then add the animation object to box1
    obj.obj.animations.push(side1);

    //Finally, launch animations on box1, from key 0 to key 100 with loop activated
 	keepgoing(obj, 100);
}

function swingbwdloop(obj, value){

	var side1 = new BABYLON.Animation("side1", "rotation.x", 30, BABYLON.Animation.ANIMATIONTYPE_FLOAT,
                                                                    BABYLON.Animation.ANIMATIONLOOPMODE_CYCLE);
    var keys = [];
    //At the animation key 0, the value of scaling is "1"
    keys.push({
        frame: 0,
        value: 0
    });

    //At the animation key 20, the value of scaling is "0.2"
	keys.push({
        frame: 25,
        value: -value
    });
	
	keys.push({
        frame: 50,
        value: 0
    });
	
	keys.push({
        frame: 75,
        value: value
    });
	
    //At the animation key 100, the value of scaling is "1"
    keys.push({
        frame: 100,
        value: 0
    });
	
	
    //Adding keys to the animation object
    side1.setKeys(keys);

    //Then add the animation object to box1
    obj.obj.animations.push(side1);

    //Finally, launch animations on box1, from key 0 to key 100 with loop activated
 	keepgoing(obj, 100);
}

function swingfwd(obj, value){

	var side1 = new BABYLON.Animation("side1", "rotation.x", 30, BABYLON.Animation.ANIMATIONTYPE_FLOAT,
                                                                    BABYLON.Animation.ANIMATIONLOOPMODE_CYCLE);
    var keys = [];
    //At the animation key 0, the value of scaling is "1"
    keys.push({
        frame: 0,
        value: 0
    });

    //At the animation key 20, the value of scaling is "0.2"
	keys.push({
        frame: 25,
        value: value
    });
	
	keys.push({
        frame: 50,
        value: 0
    });
	
	keys.push({
        frame: 75,
        value: -value
    });
	
    //At the animation key 100, the value of scaling is "1"
    keys.push({
        frame: 100,
        value: 0
    });
	
	
    //Adding keys to the animation object
    side1.setKeys(keys);

    //Then add the animation object to box1
    obj.obj.animations.push(side1);

    //Finally, launch animations on box1, from key 0 to key 100 with loop activated
 	once(obj, 100);
}

function swingbwd(obj, value){

	var side1 = new BABYLON.Animation("side1", "rotation.x", 30, BABYLON.Animation.ANIMATIONTYPE_FLOAT,
                                                                    BABYLON.Animation.ANIMATIONLOOPMODE_CYCLE);
    var keys = [];
    //At the animation key 0, the value of scaling is "1"
    keys.push({
        frame: 0,
        value: 0
    });

    //At the animation key 20, the value of scaling is "0.2"
	keys.push({
        frame: 25,
        value: -value
    });
	
	keys.push({
        frame: 50,
        value: 0
    });
	
	keys.push({
        frame: 75,
        value: value
    });
	
    //At the animation key 100, the value of scaling is "1"
    keys.push({
        frame: 100,
        value: 0
    });
	
	
    //Adding keys to the animation object
    side1.setKeys(keys);

    //Then add the animation object to box1
    obj.obj.animations.push(side1);

    //Finally, launch animations on box1, from key 0 to key 100 with loop activated
 	once(obj, 100);
}

function keepgoing(obj, numframes){
	temp.push(scene.beginAnimation(obj.obj, 0, numframes, true));
}

function once(obj, numframes){
	temp.push(scene.beginAnimation(obj.obj, 0, numframes, false));
}

function runningfwd(){
	rotatexp45(leftelbow);
	rotatexp45(rightelbow);
	rotatexn45(leftknee);
	rotatexn45(rightknee);
	
	swingfwdloop(leftshoulder, 1);
	swingfwdloop(lefthip, 1);
	swingbwdloop(rightshoulder, 1);
	swingbwdloop(righthip, 1);
	swingbwdloop(rightknee, .25);

	swingfwdloop(leftknee, .25);

}

function stopanimation(){
	
	resetA();
	
}

function resetA(){
	for(var i = 0; i < temp.length; i++){

		temp[i].reset();
	}
}

function stopA(){
	for(var i = 0; i < temp.length; i++){

		temp[i].stop();
	}
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

function test(){		
	if(stopflag){
		for(var i = 0; i < temp.length; i++){
			resetA();
		}
		stopflag = false;
	}
}		

function main() {
    var canvas = document.getElementById("renderCanvas");
    var engine = new BABYLON.Engine(canvas, true);
	
    engine.runRenderLoop(function () {
        scene.render();
    });
    var scene = new createScene(canvas, engine);
	
	setInterval(test, 1000);
		    
    // Resize
    window.addEventListener("resize", function () {
        engine.resize();
    });
}