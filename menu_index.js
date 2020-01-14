var pagenumber = 1;
var MAX_PAGE_NUMBER = 3;
function displayMenu(selection)
{
	element1 = document.getElementById('L1');
	element2 = document.getElementById('L2');
	element3 = document.getElementById('L3');
	element4 = document.getElementById('L4');

	switch(selection)
	{
		case 'first':
			pagenumber = 1;
			break;
		case 'last':
			pagenumber = MAX_PAGE_NUMBER;
			break;
		case 'up':
			pagenumber += 1;
			break;
		case 'down':
			pagenumber -= 1;
			break;
		default:
			return;
	}

	if(pagenumber < 1)
	{
		pagenumber = MAX_PAGE_NUMBER;
	}                
	else if(pagenumber > MAX_PAGE_NUMBER)
	{
		pagenumber = 1;
	}

	switch(pagenumber)
	{
		case 1:
			document.getElementById('menu_back').style.backgroundColor = '#29A8A8'; 
			element1.innerHTML='<br />a^0';
			element1.href='math/aPow0.html';
			element2.innerHTML='<br />0!';
			element2.href='math/0exlam.html';
			element3.innerHTML='<br />Item #3';
			element3.href='#';
			element4.innerHTML='<br />Item #4';
			element4.href='#';
			break;    
		case 2:       
			document.getElementById('menu_back').style.backgroundColor = '#CED42A';    
			element1.innerHTML='<br />Item #5';
			element1.href='#';
			element2.innerHTML='<br />Item #6';
			element2.href='#';
			element3.innerHTML='<br />Item #7';
			element3.href='#';
			element4.innerHTML='<br />Item #8';
			element4.href='#';
			break;
		case 3:       
			document.getElementById('menu_back').style.backgroundColor = '#FF751A';    
			element1.innerHTML='<br />Item #9';
			element1.href='#';
			element2.innerHTML='<br />Item #10';
			element2.href='#';
			element3.innerHTML='<br />Item #11';
			element3.href='#';
			element4.innerHTML='<br />Item #12';
			element4.href='#';
			break;
		default:
			break;
	}
}
