#pragma strict
var bullet:Rigidbody;
var shootForce:float;
function Start () {

}

function Update () {
	if (Input.GetButtonDown("Jump")) || if (Input.GetMouseButtonDown(0));
	{
	var instanceBullet = Instantiate(bullet, transform.position, Quaternion.identity);
	instanceBullet.velocity = transform.TransformDirection(Vector3.right*shootForce);
	//rigidbody.AddForce(transform.right*shootForce);
	//
	
}}