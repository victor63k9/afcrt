// =================================================================================================
// This software is endorsed by the followings groups
// Kathaido4Fit MMA4FITNES THAI4FIT MMACAGE4FIT  Aerobic Fitness Combat
// Kathaido is a  Copyright holded By Victor Contarin
// Aquiles Arria & Victor Contarin Project
// Kathaido4Fit MMA4FITNES THAI4FIT MMACAGE4FIT  Aerobic Fitness Combat All rights reserved.
// Copyright 2009-2020 Victor Contarin   All rights reserved.
// =================================================================================================

var x1=0;
var x2=0;
var x3=0;
var x4=0;
var x5=0;
var x6=0;
var x7=0;
var x8=0;
var x9=0;
var x10=0;
var d1=new Date();
var d2=new Date();
var d3=new Date();
var d4=new Date();
var d5=new Date();
var valor_ini_min=0;
var valor_ini_seg=0;
var runningnow=0;
var globalrounds=0;
var globalcurround=0;
var valor_ini_rest_min=0;
var valor_ini_rest_seg=0;
var estoycambiando ;
var pontelo=88;
var yahablastes=0;
var yateparastes=0;
var puedousaraudio=0;
var dimequeaudio=0;
var yaaviserep=0;
var audio1=new Audio();
var bg10_done=0;
var audio2=new Audio();
var audio3=new Audio();
var s_start_precal=0;
var s_end_precal=0;
var stop_1=null;
var stop_2=null;
var stop_3=null;



function startup()
{

var comodo1;
var comodo2;
var comodo3;
var apo;
x1=d1.getTime();
x2=(x1+120000);
x9=d2.getTime();
x8=120000;
yahablastes=0;
bg10_done=0;
clearTimeout(stop_1);
//alert(navigator.appName);
//alert(" empezo startup");

var b = check_audio();
//alert("regreso de check_audio ");

dimequeaudio=0;
//probably
if(!b)
{
  alert('No Audio support');
  return;
  
}
else
{
  var formats = ['ogg', 'mp3', 'wav', 'm4a'];
  for(var i = 0; i < formats.length; i++)
  {
    //alert(formats[i] + ' support status ' + b[formats[i]] );
	
	if (formats[i]=="mp3")
	{
		if (b[formats[i]].indexOf("probably") >-1 )
		{
			dimequeaudio=77;
			
		}
		
	}
	
	if (formats[i]=="wav")
	{
		if (b[formats[i]].indexOf("probably") >-1 )
		{
			dimequeaudio=88;
			
		}
		
	}
	
	
  }
}

//alert(" support " + dimequeaudio);


//alert("leo elementos dom");


//apo=cuentalos();
document.getElementById("txt03").style.backgroundColor="white";
document.getElementById("txt03").style.color="green";
		
valor_ini_min=parseInt(document.getElementById("txt02").value);
valor_ini_seg=60;
estoycambiando=0;

if (valor_ini_min > 1 )
{
	valor_ini_min=valor_ini_min-1;
	pontelo=0;
}
else
	
{	
	if (valor_ini_min ==1 )
		{
			valor_ini_min=0;
		}
	}
	
valor_ini_rest_min=parseInt(document.getElementById("txt05").value);
valor_ini_rest_seg=60;

if (valor_ini_rest_min > 1 )
{
	valor_ini_rest_min=valor_ini_rest_min-1;
}

if (valor_ini_rest_min ==1 )
	{
		valor_ini_rest_min=0;
	}
		

comodo1=document.getElementById("txt01").value;
comodo2=document.getElementById("txt02").value;
comodo3=document.getElementById("txt05").value;

if(comodo1=="")
{
alert("Number of rounds can not be empty!!");
return;
}


if(comodo2=="")
{
alert("Round length can not be empty !!");
return;
}

if(comodo3=="")
{
alert("Rest Time  can not be empty !!");
return;
}




if (Number(comodo1)!=comodo1)
{
	alert("Number of rounds must be numeric!!");
	return;
}

if (Number(comodo2)!=comodo2)
{
	alert("Round Length must be numeric!!");
	return;
}


if (Number(comodo3)!=comodo3)
{
	alert("Rest Time  must be numeric!!");
	return;
}


globalrounds=parseInt(comodo1);
globalcurround=1;

yaaviserep=0;
runningnow=0;
yahablastes=5;
apo=suenalacampana("66");
//alert("empiezo bajavalor");
apo=bajavalor();
return;
}



function setInnerHTML(obj, value)
 {
    obj.innerHTML = "<span>" + value + "</span>";
	return;
}

function cuentalos()
{
var apo1;
var ahora=new Date();
var mills=ahora - x9;
x9=ahora;

apo1=muestra();
x8=mills;
$(function(){
setTimeout(function(){cuentalos},10);
});
return;

}

function muestra()
{
	var Minutes;
    var Seconds;
	var TempCountSeconds = (x8);
    var OriginalSeconds = TempCountSeconds;
	
	if (x8 <=0)
	{
	document.getElementById("txt03").setAttribute("value","END");
	clearTimeout(0);
	return;
	}
	
	 TempCountSeconds = TempCountSeconds / 1000;

    Minutes = parseInt(TempCountSeconds / 60);
    Seconds = TempCountSeconds - (parseInt(Minutes) * 60);

    Seconds = Math.round(Seconds * 1000) / 1000;
    
    var SecondsDisplay = "";
SecondsDisplay = (Seconds.toFixed(1) < 10 ? "0" + Seconds.toFixed(1) : Seconds.toFixed(1));
document.getElementById("txt03").setAttribute("value",Minutes + ":" + SecondsDisplay);
top.document.title = Minutes + ":" + SecondsDisplay;
return;
	
}

function bajavalor()
{
$(document).ready(function(){
var apox;
var apoy;
var quenombre;
var a ;
var quees;
var yacambie=88;
var apo;
var axaudio2;
axaudio2=document.getElementById('myaudio3');
//alert("bajavalor");
valor_ini_seg=valor_ini_seg-1;
document.getElementById("dsp00").setAttribute("value","Round : " + globalcurround + " of "+ globalrounds);
if (estoycambiando !=0)
{
return;
}

if(valor_ini_min<=0 && valor_ini_seg <=15 )
{
	if (valor_ini_seg <=10 )
	{
	document.getElementById("txt03").style.backgroundColor="black";
	document.getElementById("txt03").style.color="yellow";
	if (bg10_done==0)
	{
	runningnow =0;
	
	if (dimequeaudio==77)
			{
			axaudio2.src="3rb.mp3";
			}
	else
			{
			axaudio2.src="3rb.wav";
			}
			
			axaudio2.load();
			
		axaudio2.play();
		
	bg10_done=9;
	}
	
	
	//a=avisame("10");
	//yaaviserep=9;
	
	}

}

if(valor_ini_min<=0 && valor_ini_seg <=0 ) 
{
	
	if (globalcurround <= globalrounds)
	{
			//alert("step 1");
			if (globalrounds >= globalcurround)
			{
				clearTimeout(stop_2);
			//	alert("step2");
				
				document.getElementById("txt03").style.backgroundColor="blue";
				document.getElementById("txt03").style.color="white";
				yahablastes=5;
				apo=suenalacampana("66");
				estoycambiando=99;
				clearTimeout(stop_2);
				yaaviserep=0;
				if (globalcurround >= globalrounds)
					{
					document.getElementById("txt03").style.fontSize="10em";
					document.getElementById("txt03").setAttribute("value","Workout End");
					clearTimeout(0);
					return;
					}
					bg10_done=0;
				quees=bajatiemporeposo();
				//globalcurround=globalcurround+1;
				return;
			
			}
		
	}
	
		
	valor_ini_min=parseInt(document.getElementById("txt02").value);
	valor_ini_seg=60;

	if (valor_ini_min > 1 )
		{
			valor_ini_min=valor_ini_min-1;
			yacambie=0;
		}
		
	else
{	
		if (valor_ini_min ==1 )
		{
			valor_ini_min=0;
		}
	}
	
	
	//globalcurround=globalcurround+1;
	if (globalcurround > globalrounds)
		{
			document.getElementById("txt03").style.fontSize="10em";
			document.getElementById("txt03").setAttribute("value","Workout End");
			clearTimeout(stop_2);
			return;
		}
}

if (globalcurround > globalrounds)
		{
			document.getElementById("txt03").style.fontSize="10em";
			document.getElementById("txt03").setAttribute("value","Workout End");
			clearTimeout(stop_2);
			return;
		}



if (valor_ini_seg <=0)
	
{
	valor_ini_seg=60;
	valor_ini_seg=valor_ini_seg-1;
	valor_ini_min=valor_ini_min -1 ;
}


if (valor_ini_seg <10)
{
apox="0"+valor_ini_seg;
}
else
{
apox=valor_ini_seg;
}

if (valor_ini_min <10)
{
apoy="0"+valor_ini_min;
}
else
{
apoy=valor_ini_min;
}

a = Math.random()* 2;
a=Math.floor(a);
a=Math.floor((Math.random()*20)+1); 
//alert("math.floor");

if (a >100)
 {
a=1;
}
if (a==0) 
{
a=1;
}

quenombre="999.wav";

if (a==1) 
{
quenombre="1.wav";
}

if (a==2)
{
quenombre="2.wav";
}

if (a==3)
{
quenombre="3.wav";
}
if (a==4)
{
quenombre="4.wav";
}
if (runningnow==1000) {

//PlaySound(quenombre);
}
runningnow=0;

hablame(a);
yahablastes=yahablastes+1;


document.getElementById("txt03").setAttribute("value",apoy + ":" +apox);
$(function(){
stop_2=setTimeout(function(){bajavalor()},1000);
});

if(valor_ini_min<=0 && valor_ini_seg <=0 ) 
{
	valor_ini_min=parseInt(document.getElementById("txt02").value);
	valor_ini_seg=60;

	if (valor_ini_min > 1 )
	{
		valor_ini_min=valor_ini_min-1;
		yacambie=0;
	}
	else
	{
	
		if (valor_ini_min ==1 )
		{
			valor_ini_min=0;
		}
	}
	
	globalcurround=globalcurround+1;
	if (globalcurround >= globalrounds)
	{
	document.getElementById("txt03").style.fontSize="10em";
	document.getElementById("txt03").setAttribute("value","Workout End");
	clearTimeout(stop_2);
	return;
	}
}
});
}


function PlaySound(soundsrc)
 {
	var td1=new Date();
	return;
	
	
	runningnow=1;	
	
	document.getElementById("Sound").innerHTML ="<embed src='" + soundsrc + "' hidden=true autostart =true loop=true />" ;
	
	do 
	{
	var td2=new Date();
	document.getElementById("txt05").innerHTML=td2.getTime();
	} while ((td2.getTime() - td1.getTime ) > 0);
	
	runningnow=0;
	return;
	
		
}
function hablame(what2say)
{
//var audio = new Audio();
var dimelo;
var audioarchivo;
var isie;
var m1=0;
var m2=0;
var axaudio1;
axaudio1=document.getElementById('myaudio3');
//isie=navigator.appName;
dimelo="@";
if (runningnow !=0)
{
 return;
}




if (yahablastes > 2  )
{
		if (dimequeaudio==77)
			{
			audioarchivo="350.mp3";
			}
		else
			{
			audioarchivo="350.wav";
			}
			runningnow=0;
			//audio3.src=audioarchivo;
			//audio3.play();
				
			for(m1=0; m1 <=100;m1++)
					{
					m2++;
					}
			
yahablastes=0;
return;
}
audioarchivo="@";
dimelo="@";

if (what2say==1)
{
	dimelo="cross";
	if (dimequeaudio==77)
	{
	audioarchivo="1.mp3";
}
	else
	{
	audioarchivo="1.wav";
	}
}


if (what2say==2)
{
dimelo="jab";

if (dimequeaudio==77)
	{
	audioarchivo="2.mp3";
	}
else
	{
	audioarchivo="2.wav";
	}


}

if (what2say==3)
{
dimelo="left hook";
if (dimequeaudio==77)
	{
	audioarchivo="3.mp3";
	}
else
{

audioarchivo="3.wav";
}
}


if (what2say==4)
{
dimelo="right hook";

if (dimequeaudio==77)
	{
	audioarchivo="4.mp3";
	}
else
{	
audioarchivo="4.wav";
}
}

if (what2say==5)
{
dimelo="left uppercut";

if (dimequeaudio==77)
	{
	audioarchivo="5.mp3";
	}
	else
	{
audioarchivo="5.wav";
}

}
if (what2say==6)
{
dimelo="right uppercut";
if (dimequeaudio==77)
	{
	audioarchivo="6.mp3";
	}
else
{
audioarchivo="6.wav";
}

}


if (what2say==7)
{
dimelo="left elbow";
if (dimequeaudio==77)
	{
	audioarchivo="7.mp3";
	}
else
{
audioarchivo="7.wav";
}

}


if (what2say==8)
{
dimelo="right elbow";
if (dimequeaudio==77)
	{
	audioarchivo="8.mp3";
	}
else
{
audioarchivo="8.wav";
}

}

if (what2say==9)
{
dimelo="left knee";
if (dimequeaudio==77)
	{
	audioarchivo="9.mp3";
	}
else
{
audioarchivo="9.wav";
}

}

if (what2say==10)
{
dimelo="right knee";
if (dimequeaudio==77)
	{
	audioarchivo="10.mp3";
	}
else
{
audioarchivo="10.wav";
}

}


if (what2say==11)
{
dimelo="left front kick";
if (dimequeaudio==77)
	{
	audioarchivo="11.mp3";
	}
else
{
audioarchivo="11.wav";
}

}

if (what2say==12)
{
dimelo="right front kick";
if (dimequeaudio==77)
	{
	audioarchivo="12.mp3";
	}
else
{
audioarchivo="12.wav";
}

}

if (what2say==13)
{
dimelo="left high kick";
if (dimequeaudio==77)
	{
	audioarchivo="13.mp3";
	}
else
{
audioarchivo="13.wav";
}
}

if (what2say==14)
{
dimelo="right high kick";
if (dimequeaudio==77)
	{
	audioarchivo="14.mp3";
	}
else
{
audioarchivo="14.wav";
}

}


if (what2say==15)
{
dimelo="left low kick";
if (dimequeaudio==77)
	{
	audioarchivo="15.mp3";
	}
else
{
audioarchivo="15.wav";
}

}


if (what2say==16)
{
dimelo="right low kick";
if (dimequeaudio==77)
	{
	audioarchivo="16.mp3";
	}
else
{
audioarchivo="16.wav";
}

}
if (what2say==17)
{
dimelo="left middle kick";
if (dimequeaudio==77)
	{
	audioarchivo="17.mp3";
	}
else
{
audioarchivo="17.wav";
}

}


if (what2say==18)
{
dimelo="right middle kick";
if (dimequeaudio==77)
	{
	audioarchivo="18.mp3";
	}
else
{
audioarchivo="18.wav";
}

}

if (what2say==19)
{
return;
dimelo="jab cross hook double right middle kick";
if (dimequeaudio==77)
	{
	audioarchivo="19.mp3";
	}
else
{
audioarchivo="19.wav";
}

}


//document.getElementById("dsp0099").innerText=dimelo;
document.getElementById("dsp0099").setAttribute("value",dimelo);
//return;

if (dimelo=="@" ){


			yateparastes=yateparastes+1;

		if (dimequeaudio==77)
			{
			audioarchivo="350.mp3";
			}
		else
			{
			audioarchivo="350.wav";
			}	
		runningnow=99;
		if (yateparastes < 5)
		{
			//aqui estoy
			
			if(axaudio1.ended)
			{
			axaudio1.src=audioarchivo;
			axaudio1.load();
			axaudio1.play();
			for(m1=0; m1 <=150;m1++)
					{
					m2++;
					}
			yateparastes=0;
			}
			else
			{
			axaudio1.pause();
			
			for(m1=0; m1 <=100;m1++)
					{
					m2++;
					}
				axaudio1.src=audioarchivo;
				axaudio1.load();
				axaudio1.play();
				for(m1=0; m1 <=100;m1++)
					{
					m2++;
					}
				yateparastes=0;	
					
			}
			
		
		}
		
		
		
		var pasatiempo=0;
		
		
		//for (pasatiempo=0;pasatiempo < 50;pasatiempo);
		runningnow=0;
		return;
}

//audio.src ='http://translate.google.com/translate_tts?ie=utf-8&tl=en&q='+dimelo;
runningnow=99;
//audio.play();
//audio.src ='http://speechutil.com/convert/wav?text='+dimelo;

if(axaudio1.ended)
{
axaudio1.src=audioarchivo;
axaudio1.load();
axaudio1.play();
for(m1=0; m1 <=150;m1++)
{
m2++;
}

}
else
{
		axaudio1.pause();
		for(m1=0; m1 <=150;m1++)
		{
		m2++;
		}
		axaudio1.src=audioarchivo;
		axaudio1.load();
		axaudio1.play();
		for(m1=0; m1 <=150;m1++)
		{
		m2++;
		}
		
		
}



runningnow=0;
}


function bajatiemporeposo()
{
$(document).ready(function(){
var apox;
var apoy;
var quenombre;
var a ;
var quees;
var  quecambio=88;
var axaudio2;
axaudio2=document.getElementById('myaudio2');
valor_ini_rest_seg=valor_ini_rest_seg-1;
document.getElementById("txt03").style.backgroundColor="blue";
document.getElementById("txt03").style.color="white";

yaaviserep=0;
if (globalcurround >globalrounds)
	{
	
	document.getElementById("txt03").style.fontSize="10em";

	document.getElementById("txt03").setAttribute("value","Workout End");
	clearTimeout(0);
	return;
	}
	
	
	if(valor_ini_rest_min<=0)
	{
		if (valor_ini_rest_seg==15)
		{
			if (dimequeaudio==77)
			{
			axaudio2.src="715.mp3";
			axaudio2.load();
			axaudio2.play();
			}
			else
			{
			axaudio2.src="715.wav";
			axaudio2.load();
			axaudio2.play();
			}
			
		}
		
		
		if (valor_ini_rest_seg==10)
		{
			if (dimequeaudio==77)
			{
			axaudio2.src="710.mp3";
			axaudio2.load();
			axaudio2.play();
			}
			else
			{
			axaudio2.src="710.wav";
			axaudio2.load();
			axaudio2.play();
			}
			
		}
		
		if (valor_ini_rest_seg==5)
		{
			if (dimequeaudio==77)
			{
			axaudio2.src="705.mp3";
			axaudio2.load();
			axaudio2.play();
			}
			else
			{
			axaudio2.src="705.wav";
			axaudio2.load();
			axaudio2.play();
			}
			
		}
	}
	
	
	
	
if(valor_ini_rest_min<=0 && valor_ini_rest_seg <=0 ) 
{

		clearTimeout(stop_3);
		document.getElementById("txt03").style.backgroundColor="white";
		document.getElementById("txt03").style.color="green";
		estoycambiando =0;
		yahablastes=5;
		yaaviserep=0;
		if (dimequeaudio==77)
			{
			axaudio2.src="700.mp3";
			axaudio2.load();
			axaudio2.play();
			}
			else
			{
			axaudio2.src="700.wav";
			axaudio2.load();
			axaudio2.play();
			}
		apo=suenalacampana("66");
	
		valor_ini_min=parseInt(document.getElementById("txt02").value);
		valor_ini_seg=60;
		if (valor_ini_min > 1 )
			{
				valor_ini_min=valor_ini_min-1;
				yacambie=0;
			}
		else
		{
			
			if (valor_ini_min ==1 )
			{
				valor_ini_min=0;
			}
		}
		clearTimeout(stop_3);
		globalcurround=globalcurround+1;
	
		valor_ini_rest_min=parseInt(document.getElementById("txt05").value);
		valor_ini_rest_seg=60;

		if (valor_ini_rest_min > 1 )
		{
			valor_ini_rest_min=valor_ini_rest_min-1;
		}
		if (valor_ini_rest_min ==1 )
			{
				valor_ini_rest_min=0;
			}

			
		if (globalcurround > globalrounds)
		{
			apo=suenalacampana("99");
			document.getElementById("txt03").style.fontSize="10em";
			document.getElementById("txt03").setAttribute("value","Workout End");
			clearTimeout(0);
			return;
		}
			
		//yaaviserep=0;
		quees=bajavalor();
		return;
 
	
	valor_ini_rest_min=parseInt(document.getElementById("txt05").value);
	valor_ini_rest_seg=60;

	if (valor_ini_rest_min > 1 )
	{
		valor_ini_rest_min=valor_ini_rest_min-1;
	}
	
	if (valor_ini_rest_min ==1 )
	{
		valor_ini_rest_min=0;
	}
	
	
	//globalcurround=globalcurround+1;
	if (globalcurround > globalrounds)
	{
	
	}
}


if (valor_ini_rest_seg <=0)
	
{
	valor_ini_rest_seg=60;
	valor_ini_rest_seg=valor_ini_rest_seg-1;
	valor_ini_rest_min=valor_ini_rest_min -1 ;
}


if (valor_ini_rest_seg <10)
{
apox="0"+valor_ini_rest_seg;
}
else
{
apox=valor_ini_rest_seg;
}

if (valor_ini_rest_min <10)
{
apoy="0"+valor_ini_rest_min;
}
else
{
apoy=valor_ini_rest_min;
}



document.getElementById("txt03").setAttribute("value",apoy + ":" +apox);
$(function(){
stop_3=setTimeout(function(){bajatiemporeposo()},1000);
});

if(valor_ini_rest_min<=0 && valor_ini_rest_seg <=0 ) 
{
	valor_ini_rest_min=parseInt(document.getElementById("txt05").value);
	valor_ini_rest_seg=60;

	if (valor_ini_rest_min > 1 )
	{
		valor_ini_rest_min=valor_ini_rest_min-1;
	}
	
	if (valor_ini_rest_min ==1 )
	{
		valor_ini_rest_min=0;
	}
	globalcurround=globalcurround+1;
	
}
});
}

function check_audio() 
{
  var elem = document.createElement('audio');
  bool = false;
   
  try
  {
    if ( bool = !!elem.canPlayType ) 
    {
      bool = new Boolean(bool);
      bool.ogg = elem.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,'');
      bool.mp3 = elem.canPlayType('audio/mpeg; codecs="mp3"').replace(/^no$/,'');
      bool.wav = elem.canPlayType('audio/wav; codecs="1"').replace(/^no$/,'');
      bool.m4a = (elem.canPlayType('audio/x-m4a;') || elem.canPlayType('audio/aac;')).replace(/^no$/,'');
    }
  } 
  catch(e) 
  { 
  alert(" error " );
  
  }
   
  return bool;
}

function suenalacampana(quecampana)
{
//var xaudio = new Audio();
var xaudiarchivo;
var m1=0;
var m2=0;
var axaudio3;
axaudio3=document.getElementById('myaudio99');
//yaaviserep=0;
//alert("suenalacampana " + quecampana + " => " + yaaviserep);
//alert("suenalacampana ==>> "+ dimequeaudio);
if (quecampana=="66")
{
		if (dimequeaudio==77)
			{
			xaudioarchivo="1rb.mp3";
			}
		else
			{
			xaudioarchivo="1rb.wav";
            xaudioarchivo="1rb.mp3";
			}

//alert("sueno " + xaudioarchivo);

}

if (quecampana=="99")
{
	if (dimequeaudio==77)
		{
		xaudioarchivo="3rb.mp3";
		}
	else
		{
		xaudioarchivo="3rb.wav";
		}
		
		
		
		
		if (yaaviserep==0)
					{
					yaaviserep=9;
						
						if(axaudio3.ended)
								{
										//axaudio3.src=xaudioarchivo;
										axaudio3.setAttribute('src',xaudioarchivo);
										axaudio3.load();
										axaudio3.play();
										for(m1=1;m1 <=150;m1++)
											{
											m2++;
											}
								
								}
								else
								{
										
										 axaudio3.pause();
													
										
										for(m1=1;m1 <=150;m1++)
											{
											m2++;
											}
											//axaudio3.src=xaudioarchivo;
											axaudio3.setAttribute('src',xaudioarchivo);
											axaudio3.load();
											axaudio3.play();
											for(m1=1;m1 <=150;m1++)
											{
											m2++;
											}
								}
						
						
						return;
						
						
					}
			
}


		//alert(" ===>>> " + quecampana);
        
			
			if (axaudio3.ended)
					{
                   // alert("axaudio3.ended");
						//axaudio3.src=xaudioarchivo;
                         axaudio3.setAttribute('src',xaudioarchivo);
						 axaudio3.load();
						axaudio3.play();
						for(m1=1;m1 <=150;m1++)
								{
								m2++;
								}
					}
			else
					{
                   // alert("not axaudio3.ended");
                    axaudio3.pause();
							for(m1=1;m1 <=150;m1++)
									{
									m2++;
									}
							
                            
                            
							//axaudio3.src=xaudioarchivo;
                            axaudio3.setAttribute('src',xaudioarchivo);
							 axaudio3.load();
							axaudio3.play();
							
							for(m1=1;m1 <=150;m1++)
							{
							m2++;
							}
							
					}
			
			
			return;
		
		}

		
		
function avisame(queteaviso)
		{
		//var xaudio = new Audio();
		var xaudiarchivo;
		var m1=0;
		var m2=0;
		var axaudio1;
		axaudio1=document.getElementById('myaudio99');
		if (yaaviserep!=0)
		{
		yateparastes=9;
		
		return;
		}
		
		if (queteaviso=="15")
{
			if (dimequeaudio==77)
				{
				xaudioarchivo="715.mp3";
				}
			else
				{
				xaudioarchivo="715.wav";
				}

		}
		
		
		if (queteaviso=="10")
{
			if (dimequeaudio==77)
				{
				xaudioarchivo="3rb.mp3";
				}
			else
				{
				xaudioarchivo="3rb.wav";
				}

		}
		
		if (queteaviso=="5")
{
			if (dimequeaudio==77)
				{
				xaudioarchivo="705.mp3";
				}
			else
				{
				xaudioarchivo="705.wav";
				}

		}
		runningnow=99;
			if(axaudio1.ended)
			{
			axaudio1.src=xaudioarchivo;
			axaudio1.load();
			axaudio1.play();
			
			for(m1=1;m1 <=150;m1++)
			{
			m2++;
			}
			runningnow=0;
			}
			else
			{
				axaudio1.pause();
				for(m1=1;m1 <=150;m1++)
					{
					m2++;
					}
					axaudio1.src=xaudioarchivo;
					axaudio1.load();
					axaudio1.play();
					for(m1=1;m1 <=150;m1++)
						{
						m2++;
						}
					runningnow=0;
			}
			
			
			
			
			return;
		}
		
		
		
		function stopall()
		{
		 valor_ini_min=0;
		 valor_ini_seg=0;
		 runningnow=0;
		 globalrounds=0;
		 globalcurround=0;
		 valor_ini_rest_min=0;
		 valor_ini_rest_seg=0;

		window.clearTimeout(0);
		
		return;
		}
		
		function diezseg()
		{
		var yaudiarchivo="@";
		var m1=0;
		var m2=0;
		var axaudio1;
		axaudio1=document.getElementById('myaudio88');
		//alert("=> " + dimequeaudio);
		
		
		
		
		if (dimequeaudio==77)
			{
			yaudioarchivo="710.mp3";
			}
		else
			{
			yaudioarchivo="710.wav";
			}
			runningnow=9;
			
		axaudio1.src=yaudioarchivo;
		axaudio1.load();
		axaudio1.play();
			
			for(m1=1;m1 <=100;m1++)
			{
			m2++;
			}
			runningnow=0;
			
			return;

		}
		
		function prellamada()
		
		{
		var spre="";
		var empiezo=false;
		var axaudio1;
		var m1=0;
		var m2=0;
		
		
		empiezo=confirm("Press Ok when ready.15 seconds delay time will let you prepare for start.Are you ready?");
		if (empiezo==false)
		{
			return;
		}
		
		
		
		
		axaudio1=document.getElementById('myaudio1');
		axaudio1.setAttribute('src','1rb.mp3');
		axaudio1.load();
		axaudio1.play();
		for(m1=1;m1 <=150;m1++)
			{
			m2++;
			}
		
		axaudio1=document.getElementById('myaudio2');
		axaudio1.setAttribute('src','1rb.mp3');
		axaudio1.load();
		axaudio1.play();
		
		for(m1=1;m1 <=150;m1++)
			{
			m2++;
			}
		
		
		
		axaudio1=document.getElementById('myaudio3');
		axaudio1.setAttribute('src','1rb.mp3');
		axaudio1.load();
		axaudio1.play();
		for(m1=1;m1 <=150;m1++)
			{
			m2++;
			}
		
		
		axaudio1=document.getElementById('myaudio99');
		axaudio1.setAttribute('src','1rb.mp3');
		axaudio1.load();
		axaudio1.play();
		for(m1=1;m1 <=150;m1++)
			{
			m2++;
			}
		
		
		
		
		s_start_precal=0;
		s_end_precal=15;
		
		/*if (parseint(s_end_precal)<10){
		document.getElementById("txt03").setAttribute("value","00" + ":0" +s_end_precal);
		} */
	/*if (parseint(s_end_precal)>10){
		document.getElementById("txt03").setAttribute("value","00" + ":" +s_end_precal);
		}*/
		document.getElementById("txt03").setAttribute("value","00" + ":" +s_end_precal);
		$(function(){
		stop_1=setTimeout(function(){precalientamento()},1000);
		});
		
		return;
		
		}
		
		function precalientamento()
		{
			var iniciar;
			var zeus=0;
			if (s_end_precal <=0)
			{
			clearTimeout(stop_1);
			//iniciar=startup();
			stop_1=setTimeout(function(){startup()},10);
			return;
			}
			
			s_end_precal -- ;
			zeus=(s_end_precal);
			
			
			if ((zeus)<10){
			document.getElementById("txt03").setAttribute("value","00" + ":0" +s_end_precal);
			}
			if ((zeus)>=10){
			document.getElementById("txt03").setAttribute("value","00" + ":" +s_end_precal);
			}
			
			stop_1=setTimeout(function(){precalientamento()},1000);
			return;
			
		}
		
		function llamanos()
		{
		
        
		window.open("https://sites.google.com/site/aerofitcom/information","_blank","toolbar=yes, location=yes, directories=no, status=no, menubar=yes, scrollbars=yes, resizable=no, copyhistory=yes, width=600, height=600");

		return;
    }

			
		