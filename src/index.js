module.exports = function multiply(first, second) {
  var long_str, short_str;
  if(first.length>second.length)
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
  for(i=0;i<long_str.length+1;i++)//заполняем нулями
  {
    newmass[i]=0;
  }
  var mult_elem=0;
  var p=0;//для сдвига при умножении
  for(var i=short_str.length-1;i>=0;i--)// берем элементы из короткой строки
  {
    for(var j=long_str.length-1;j>=0;j--)//для каждого элемента длинной 
                                      //строки перебираем элементы короткой строки
    { 
     //alert("korotki*dlinn: "+short_str.charAt(i)+" * "+long_str.charAt(j));
     mult_elem=(+(short_str.charAt(i)))*(+(long_str.charAt(j)));
     //alert("rez mult "+mult_elem);
     newmass[j+p]=newmass[j+p]+(mult_elem%10);
     newmass[j-1+p]=newmass[j-1+p]+((mult_elem-(mult_elem%10))/10);
     if(newmass[j-1+p]>9)
     {
      newmass[j-2+p]=newmass[j-2+p]+1;
      newmass[j-1+p]=newmass[j-1+p]%10;
     }
    // alert("mult_elem/10= "+((mult_elem-(mult_elem%10))/10));
     //alert("ostatok "+mult_elem%10);
     
     
    }
    p++;
//alert("newmass["+i+"]= "+newmass[i]);

  }
  //alert("massiv  "+newmass);
  for(var i=0; i<newmass.length;i++)
  { //alert("'element newmass ["+i+"] = "+newmass[i]);
       if(newmass[i]>9)
     {
      newmass[i-1]=newmass[i-1]+1;
      newmass[i]=newmass[i]%10;
     }
  }
  //alert("massiv  "+newmass);


  var mult_str=newmass.join('');//переводим массив в строку
  //alert("poluhilas stroka: "+mult_str);

  return mult_str;
}
}
