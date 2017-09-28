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
  var mult_elem=0;
  var k;
  for(var i=short_str.length-1;i>=0;i--)// берем элементы из короткой строки
  {     
    for(var j=long_str.length-1;j>=0;j--)//для каждого элемента длинной 
                                      //строки перебираем элементы короткой строки
    {    k=i+j+1;  
     mult_elem=(+(short_str.charAt(i)))*(+(long_str.charAt(j)));
//если в newmass уже есть значение
             if(mult_elem<10)
            {
              newmass[k]=newmass[k]+mult_elem;
                if(newmass[k]>9)
                  {
                   newmass[k]=newmass[k]%10;
                   if(newmass[k-1]=='*')
                     {
                       newmass[k-1]=0;
                       newmass[k-1]=newmass[k-1]+1;
                     } else{
                      newmass[k-1]=newmass[k-1]+1;}
                  }
            } else {//если в newmass уже есть значение и mult_elem>9
                    newmass[k]=newmass[k]+(mult_elem%10);//второе число даем текущему эл-ту
                    if(newmass[k-1]=='*')
                    {
                      newmass[k-1]=0;
                      newmass[k-1]=newmass[k-1]+((mult_elem-mult_elem%10)/10);
                    } else{
                       newmass[k-1]=newmass[k-1]+((mult_elem-mult_elem%10)/10);}
                   }
    

     for(var g=newmass.length;g>0;g--)
     {
              if(newmass[g]>9)
                {
           
                  var h1=newmass[g]; 
                  newmass[g]=(newmass[g]%10); 
                  var h=newmass[g-1];                                   
                  newmass[g-1]=newmass[g-1]+((h1-h1%10)/10);
                      
                }
          
     }

    }

  }

  for(var i=0;i<(newmass.length);i++)
  {
    if(newmass[i]==0)
    {
      newmass[i]='*';
    }
    else{break;}
  }

  var mult_str=newmass.join('');//переводим массив в строку
   for(var i=0;i<(newmass.length);i++)
  {
  mult_str=mult_str.replace('*','');
}
  return mult_str;
}
