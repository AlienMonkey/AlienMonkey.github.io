//-------------------------------------------
function is_prim(n)
{
	for (var i = 2; i * i <= n; i++)
		if (n % i == 0)
			return false;
	return true;	
}
//-------------------------------------------
for (var i = 1; i < 1e8; i++)
	if (is_prim(i))
		postMessage(i);
	
postMessage("gata");
//-------------------------------------------