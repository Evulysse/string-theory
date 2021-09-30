function xify(str) {
    let output = '';
    for (let i = 0; i < str.length; i++) {
      output = output + 'x';
    }
    return output;
  }
  
  console.log(xify('hello'));
  console.log(xify('hi there'));
  console.log(xify('tree'));
  
// //--------yellingChars----------------------------------------------------------------------

function yellingChars(str) {
    let output = '';
    for (let i = 0; i < str.length; i++) {
       output += (str[i])
       output += ("!")
    }
    return output;
  }
  
  console.log(yellingChars(' goodness'));
  console.log(yellingChars('oh hello '));


// //   ----indexChars___-----------------------------------------------------------------
console.log('indexed--')

function indexedChars(str) {
    let output = '';
    for (let i = 0; i < str.length; i++) {
    
       output = output + i+ str[i] 
     
    }
    return output;
  }
  
  console.log(indexedChars('Wow this is neat'));


// //   -----------------numberedChars-----------------------------------------------------

console.log('numberedChar---')

function numberedChars(str) {
  
    let output = '';
    for (let n = 0; n < str.length; n = n + 1) {
      

      output = output + '('+(n+1) +')' + str[n]; 
        
    }
    return output;
    
  }
  console.log(numberedChars('hello'));
  console.log(numberedChars('Bye'));
  

//   -----------exclaim----------------------------------------------------------------
console.log('exclaim---')

function exclaim(str) {
    let output = '';
    for (let i = 0; i < str.length; i++) {
      if(str[i] === '?' || str[i] === '.') {
        output = output + '!';
      }else {
        output = output + str[i];
      } 
     }
    return output;
  }
  
  console.log(exclaim('What are you doing? Are you a fool?'));
  

// -----------repeatIt----------------------------------------------------------------
console.log('repeatIt---')

function repeatIt(str, n ) {
      let output = '';
      for (let i = 0; i < n; i++) {
        
          output = output + str;
        
       }
      return output;
    }
    
console.log("\nrepeatIt function:");
console.log(repeatIt("beetlejuice", 3));
console.log(repeatIt("oh hi!", 8));


//===========truncate==================================================================
console.log('truncate---')

function truncate(str) {
          
    if (str.length>15) {
    let output = '';
          for (let i = 0; i < 15; i++) {
            output = output + str[i];
          }
              output = output + '...';
              return output;
           
            }else {
          return str;
        }
     

    }
    console.log(truncate('The twinkle, in the stars, is a very nice sight'));


// ==================================================ciEmailify=======================
console.log('ciEmailify---')

function ciEmailify(str) {
          let output = '';
          for (let i = 0; i < str.length; i++) {
            if (str[i] === ' '){
                output+=  '.';
            
            }else { 
              output = output + str[i];
            }
           }

          output = output + '@codeimmersives.com'
          return output;
        }
        console.log(ciEmailify('colin jaffe'));   
        console.log(ciEmailify('Anthony DeRosa'));


//  ===================================reverse==========================================
console.log('reverse---')

function reverse(str) {
              let output = '';
              for (let i = 0; i < str.length; i++) {
                const index = (str.length -1) -i;
                const letter = str[index];  
                output = output + letter;
                }
              return output;
            }

            console.log(reverse('colin'))
            console.log(reverse('mesura'))


// ==========================onlyVowels=================================================
console.log('onlyVowels---')

function onlyVowels(str) {
    let output = '';
    for (let i = 0; i < str.length; i++) {
      const letter = str[i];  
      if( 
          letter === 'a' ||
          letter === 'e' ||
          letter === 'i' ||
          letter === 'o' ||
          letter === 'u'  
      ) {

      output = output + letter;
      }
    }
    return output;
  }

  console.log(onlyVowels('colin jaffe'))
  console.log(onlyVowels('anthont derosa'))

