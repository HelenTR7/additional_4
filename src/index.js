module.exports =function multiply(first, second) {

  var long_str, short_str;
  if(first.length>=second.length)
  {
   long_str=first;
   short_str=second;
  }
  else
  {
   long_str=second;
   short_str=first;
  }

  var newmass=[];
  for(i=0;i<(long_str.length+short_str.length);i++)//заполняем нулями
  {
    newmass[i]=0;
  }
 // alert("max dlina mass proizv   "+newmass.length);
  var mult_elem=0;var e=0;var k=newmass.length-1;var y=0;
  var p=0;//для сдвига при умножении
  for(var i=short_str.length-1;i>=0;i--)// берем элементы из короткой строки
  { 
    for(var j=long_str.length-1;j>=0;j--)//для каждого элемента длинной 
                                      //строки перебираем элементы короткой строки
    { 
     //alert("korotki*dlinn: "+short_str.charAt(i)+" * "+long_str.charAt(j));
     mult_elem=(+(short_str.charAt(i)))*(+(long_str.charAt(j)));
     //alert("rez mult "+mult_elem);
          //if(mult_elem==0){e++;}alert("mult_elem "+mult_elem);
          if(mult_elem<10)
          {
          newmass[k+y]=newmass[k+y]+mult_elem;
          }else{
          newmass[k+y]=newmass[k]+(mult_elem%10);
          newmass[k-1+y]=newmass[k-1+y]+((mult_elem-(mult_elem%10))/10);
          }
    //alert("k-e elementi  ["+(k+y)+"]"+newmass[k+y]);   

    // alert("mult_elem/10= "+((mult_elem-(mult_elem%10))/10));
     //alert("ostatok "+mult_elem%10);
     k--;    
    }y++;
         
//alert("newmass["+i+"]= "+newmass[i]);

  }
  for(var i=0;i<(long_str.length+short_str.length);i++)
  {
    if(newmass[i]==0)
    {
      newmass[i]='*';
    }
    else{break;}
  }
  var mult_str=newmass.join('');//переводим массив в строку
  mult_str=mult_str.replace('*','');

  //alert("poluhilas stroka: "+mult_str);

  return mult_str;
}
