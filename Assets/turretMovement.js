#pragma strict
var speed : int= 5.0;
function Start () {

}

function Update () {
	//turret movement
	//Debug.Log(transform.rotation.y);
	var sideMove = Input.GetAxis("Horizontal")*speed;
	//if (transform.rotation.y === -0.4f)
	//{
	//sideMove = 0;
	//}
	//if (transform.rotation.y === -0.8f)
	//{
	//sideMove = 0;
	//}
	//transform.Rotate(Vector3.up*sideMove*Time.deltaTime);
}