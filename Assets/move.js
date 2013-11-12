#pragma strict
var speed : float = 1.5;
private var count : int = 0;

function Start () {
//	Debug.Log("Start Again");
	transform.position=Vector3(0, 1, 0);
		transform.rotation = Quaternion.identity;
}

function Update () {
	Application.targetFrameRate = 60;
	// tanks's forward movement speed
	var forwardMove = Input.GetAxis("Vertical") * speed;
	var sideMove = Input.GetAxis("Horizontal")*speed/2;
	transform.Translate(Vector3.right*forwardMove*Time.deltaTime);
	
	if (forwardMove < 0)
	{
	sideMove*= -1;
	}
	
	transform.Rotate(Vector3.up*sideMove*Time.deltaTime*speed);

	if (Vector3.Dot(transform.up,Vector3.up) < 0 || transform.position.y <= -100)
	{
		
		count++;
		if (count >= 60*2)
		{
			count = 0;
			Start();
		}
	}
	else
	{
		count = 0;
	}
}