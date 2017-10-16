var num1 = 0;
var num2 = 0;
var PrimeNumber = " ";
for (var num1 = 1; num1 <= 1000; num1++)	
	{ 
		var counter = 0;
		for (num2 = num1; num2 >= 1; num2--)
		{
				if (num1 % num2 == 0)
					{
						counter++
					}
		}
		if (counter == 2 )
		{
			PrimeNumber = PrimeNumber + num1 + " ";
		}
	}
	console.log("The Prime numbers from 1 to 100 are :" + PrimeNumber);
	 
	
	