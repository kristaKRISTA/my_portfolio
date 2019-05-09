<template>

  <v-app v-app>
   
    <v-container fluid>
      <div id="particles">
          <vue-particles
        color="#dedede"
        :particleOpacity="0.9"
        :particlesNumber="80"
        shapeType="circle"
        :particleSize="3"
        linesColor="#5f6268"
        :linesWidth="1.5"
        :lineLinked="true"
        :lineOpacity="0.4"
        :linesDistance="150"
        :moveSpeed="3"
        :hoverEffect="true"
        hoverMode="grab"
        :clickEffect="true"
        clickMode="push"
      >
      </vue-particles>
      </div>

      
    <v-layout row id="center-top">

      <v-flex grow pa-1>
        <v-card flat>
          <v-card-text>

            <a href="#">
            <img id="logo" src="./assets/logo.png" alt="">
            </a>
         
          </v-card-text>
        </v-card>
      </v-flex>

      
    </v-layout>
    <v-layout row valign-space-around id="center-row"> 

   
      <v-flex d-flex grow pa-1>
        <v-card flat>
          <v-card-text>    
            <h1 class>Creative Freedom</h1>
          </v-card-text>
        </v-card>
      </v-flex>
     
    </v-layout>
    <v-layout row id="center-bottom">


      <v-flex shrink pa-1>
                  <v-card flat>
                    <v-card-text id="CV">
           <a href="https://www.linkedin.com/in/krista-pesecka-48a316ba/" target="_blank">
           <img id="social-links" src="./assets/inal.png" alt="">
           </a>
           </v-card-text>
           </v-card>
      </v-flex>




      <v-flex shrink pa-1>
        <v-card flat>
        <a href="./assets/Pesecka_CV_final1.pdf"> 
        <v-card-text id="CV"> <b>CV</b> </v-card-text>
        </a>


        </v-card>
      </v-flex>



      <v-flex grow pa-1>
        <v-card flat>
          <v-card-text>
            
              <div id="vertkrista">
                <a href="#div-firstscroll" v-smooth-scroll>
                  <span id="vert-line-text">let's meet</span>
              
                  <span id="vert-line"></span>  
                </a>

            </div>
          </v-card-text>
        </v-card>
      </v-flex>


      <v-flex shrink pa-1>
        <v-card flat>
          <v-card-text></v-card-text>
        </v-card>
      </v-flex>
    </v-layout>





    <!-- Second Page -->
  </v-container>
    <v-container fluid  id="div-firstscroll">
    <v-layout row id="center-top">
      
      <v-flex grow pa-1>
        <v-card flat>

          <v-card-text>
        
            <a href="#">
              <img id="logo" src="./assets/logo.png" alt="">
         </a>

          
          </v-card-text>
        </v-card>
      </v-flex>

     
      
    </v-layout>
    <v-layout row valign-space-around id="center-row"> 


       <v-flex d-flex xs4 pa-1>
        <v-card flat>
          <v-card-text>  
             <v-img id="portraitimg" width="400"    :src="portraitimg"></v-img>
           </v-card-text>
        </v-card>
      </v-flex>

     

     
      
      <v-flex d-flex xs8 pa-1>
        <v-card flat>
          <v-card-text align-end fill-height row style="height:60vh">   
                    
            <span id="me">To succeed you need to find something that inspires you, something that 
            motivates you and <br> something to hold on to<span class="dotdot">.</span>
            Each and every one of my projects is something special to me that <br> requires its own unique approach and undevided attention<span class="dotdot">.</span>  </span>

            <br>
            <v-btn id="readmorebtn" flat v-on:click="readmoretext = !readmoretext">Read more</v-btn>
            <p v-if="readmoretext">For as long as I can remember myself i have always dreamt to work in Television<span class="dotdot">.</span> 
              I had no idea what that really meant <br> and required<span class="dotdot">.</span>
              I’ve started as a director assistant for local TV reality show, then became a content editor of several local broadcasts which lead me to even becoming a producer on my own<span class="dotdot">.</span> I even have worked as a TV host<span class="dotdot">.</span> 

              I’m very proud <br> to say that in my 10-year career in Television I’ve had accomplished and managed some amazing projects<span class="dotdot">.</span> 
              Although the <br> most important thing is that I was following my dream and passion<span class="dotdot">.</span>

              Despite my experience that I have gained from <br> participating and working in different projects I still try to add to my knowledge every chance i get<span class="dotdot">.</span>

              </p>    



<v-layout id="fourlogo" align-end justify-center >
      <v-flex>
           <v-layout align-end justify-center row fill-height >
             <v-flex class="text-md-center"  xs3>
<span id="brotherstext">  I have three brothers </span>
             </v-flex>
               <v-flex class="text-md-center"  xs3>
                 
               
 <span id="cellotext">I used to play a cello</span> 
             </v-flex>
               <v-flex  class="text-md-center" xs3>
                  <span id="tibettext"  class="text-md-center"> Tibet is on my travel bucket list </span>
             </v-flex>
               <v-flex class="text-md-center"  xs3>
               
    <span id="candiestext">  Jelly candies is my weakness </span>
             </v-flex>


           </v-layout>
           <v-layout>
             <v-flex class="text-md-center"  xs3>
       <img id="puikas" src="./assets/puikas.png" alt="">
             </v-flex>
             <v-flex class="text-md-center"  xs3>
                 <img id="skola" src="./assets/skola.png" alt=""> 
       
             </v-flex>
             <v-flex class="text-md-center"  xs3>
              
    
         <img id="pasaule" src="./assets/pasaule.png" alt="">
             </v-flex>
             <v-flex class="text-md-center"  xs3>
               
        <img id="kon" src="./assets/kon.png" alt=""> 
             </v-flex>


        
               
       
        
        
           </v-layout>

 
        

      </v-flex>
    </v-layout>


          </v-card-text>
        </v-card>
      </v-flex>
     
     
    </v-layout>
    <v-layout row id="center-bottom">
      <v-flex shrink pa-1>
        <v-card flat>

          
        </v-card>
      </v-flex>

      <v-flex grow pa-1>
        <v-card flat>

          <v-card-text>

            <div id="vertkrista">
               <a href="#wow" v-smooth-scroll>
                <span id="vert-line-text">projects</span>  
                <span id="vert-line"></span>
               </a>
            </div>



            

          </v-card-text>
        </v-card>
      </v-flex>






      <v-flex shrink pa-1>
        <v-card flat>

          <v-card-text></v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
  <!-- Second Page End 1 pop up box --> 

  



  

    <!-- Third Page -->
  <v-container fluid id="wow">
    
    <v-layout row id="center-top">
      
      <v-flex grow pa-1>
        <v-card flat>

          <v-card-text>
          

          <a href="#">
            <img id="logo" src="./assets/logo_white.png" alt="">
            </a>
         
          </v-card-text>
        </v-card>
      </v-flex>


    
      
    </v-layout>
    <v-layout row valign-space-around id="center-row-projects"> 
   
   <!-- left side-->
<v-flex xs6 ml-5 pl-5 id="main-projects-left">
  <h3>Projects</h3>

  
             <v-dialog id="popupbox"
      v-model="dialog"
      width="500"
    >
      <template  id="popupbox" v-slot:activator="{ on }">
        <p v-on="on">
          Skriveru plums in dark chocolate
        </p>
      </template>

      
      <v-card>
          
        <v-card-text> Role: Video production: idea, content, script, structure creation. Filming, editing, voice over.
 </v-card-text>
      
        <v-card-text>
         <iframe width="560" height="315" src="https://youtu.be/kdHlUrBo5Fg" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>   
        </v-card-text>

        <v-divider></v-divider>

      </v-card>
    </v-dialog>

<!-- pop up box END 1 -->

<!-- pop up box START 2 -->
<v-dialog id="popupbox4"
      v-model="dialog"
      width="500"
    >
      <template  id="popupbox4" v-slot:activator="{ on }">
        <p v-on="on">
          Skriveru candies
        </p>
      </template>

      <v-card>
          
        <v-card-text>Role: Video production: idea, content, script, structure creation. Filming, editing, voice over.
</v-card-text>
        
        <v-card-text>
<iframe width="560" height="315" src="https://youtu.be/zNLjZV4dDa4" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>        </v-card-text>
      

        <v-divider></v-divider>

      </v-card>
    </v-dialog>
<!-- pop up box END 2 -->




<!-- pop up box START 3 -->
<v-dialog id="popupbox4"
      v-model="dialog"
      width="500"
    >
      <template  id="popupbox4" v-slot:activator="{ on }">
        <p v-on="on">
          Marmara Sterling
        </p>
      </template>

      <v-card>
          
        <v-card-text>Role: Idea owner, talent.
</v-card-text>
        
        <v-card-text>
<iframe width="560" height="315" src="https://youtu.be/EHm5FBQreWI" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>        </v-card-text>
      

        <v-divider></v-divider>

      </v-card>
    </v-dialog>
<!-- pop up box END 3 -->

<!-- pop up box START 4 -->
<v-dialog id="popupbox5"
      v-model="dialog"
      width="500"
    >
      <template  id="popupbox5" v-slot:activator="{ on }">
        <p v-on="on">
         Music video "Labu nakti" by Intars Busulis
        </p>
      </template>

      <v-card>
          
        <v-card-text>Role: Idea owner, video clip producer.
</v-card-text>
        
        <v-card-text>
         <iframe width="560" height="315" src="https://www.youtube.com/watch?v=4cZY-11pPek" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>   
        </v-card-text>

        <v-divider></v-divider>

      </v-card>
    </v-dialog>
<!-- pop up box END 4 -->


</v-flex>

   <!-- right side-->
   <v-layout  align-end  row fill-height>
     <v-flex  xs12 mr-5 pr-5 id="main-projects-right">
       <div id="main-project-right-border"></div>
      <h3>TV SHOWS</h3>


      <!-- pop up box START 1.1 -->
      <v-dialog id="popupbox6"
      v-model="dialog"
      width="500"
    >
      <template  id="popupbox6" v-slot:activator="{ on }">
        <p v-on="on">
         For more colorful life
        </p>
      </template>

      <v-card>
          
        <v-card-text>Role: Content editor
</v-card-text>
        
        <v-card-text>
         <iframe width="560" height="315" src="https://youtu.be/-Gx-trJkC28" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>   
        </v-card-text>

        <v-divider></v-divider>

      </v-card>
    </v-dialog>

<!-- pop up box END 1.1 -->

 <v-dialog id="popupbox6"
      v-model="dialog"
      width="500"
    >
      <template  id="popupbox6" v-slot:activator="{ on }">
        <p v-on="on">
         Father in the trap
        </p>
      </template>

      <v-card>
          
        <v-card-text>Role: Content editor
</v-card-text>
        
        <v-card-text>
         <iframe width="560" height="315" src="https://www.youtube.com/watch?v=j8Ms97mRtFE" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>   
        </v-card-text>

        <v-divider></v-divider>

      </v-card>
    </v-dialog>

<!-- pop up box END 1.2 -->

<!-- pop up box START 1.3 -->
<v-dialog id="popupbox6"
      v-model="dialog"
      width="500"
    >
      <template  id="popupbox6" v-slot:activator="{ on }">
        <p v-on="on">
         Superbingo
        </p>
      </template>

      <v-card>
          
        <v-card-text>Role: TV Host
</v-card-text>
        
        <v-card-text>
         <iframe width="560" height="315" src="https://www.youtube.com/watch?v=63IWqplFiXc" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>   
        </v-card-text>

        <v-divider></v-divider>

      </v-card>
    </v-dialog>

<!-- pop up box END 1.3 -->
    

      </v-flex>
      
      </v-layout>
      
    </v-layout>
     <v-flex grow pa-1>
        <v-card flat>
          <v-card-text>

              <div id="vertkrista">
                <a href="#div-secondscroll" v-smooth-scroll>
               <span id="vert-line-text-more">more</span>
               <span id="vert-line-green"></span>

               </a>
               </div>


                  



               

          </v-card-text>
        </v-card>

      </v-flex>

  </v-container>
  <!-- Third Page End -->





   <!-- Fourth Page start -->

    <v-container fluid id="div-secondscroll">

    
    
    <v-layout row id="center-top">
      
      <v-flex grow pa-1>
        <v-card flat>

          <v-card-text>
             <a href="#">
              <img id="logo" src="./assets/logo.png" alt="">
         </a>
         
         
          </v-card-text>
        </v-card>
      </v-flex>
      
    </v-layout>
    <v-layout row valign-space-between id="center-top"> 
      <span id="trust">  <b>You can trust me with</b> </span>
    
    </v-layout>
    <v-layout  justify-space-around row id="center-row-threeitems"> 
    <v-flex mx-5>
            <h2 id="content" class="text-none" flat v-on:click="readmoretext = !readmoretext">Production of content</h2>
            <p id="idea" v-if="readmoretext">Idea creation</p>   
            <p id="editing" v-if="readmoretext">Scriptwriting and editing</p> 
            <p id="storyboarding" v-if="readmoretext">Storyboarding</p> 

    </v-flex >
<v-flex mx-5>
            <h2 id="video" class="text-none" flat v-on:click="readmoretext = !readmoretext">Production of video</h2>
            <p id="video idea" v-if="readmoretext">Video editing</p>   
            <p id="motion graphics" v-if="readmoretext">Motion graphics</p> 
            <p id="color correction" v-if="readmoretext">Color correction</p> 
            <p id="single-camera shoots" v-if="readmoretext">Single-camera shoots</p>  
            <p id="multi-camera shoots" v-if="readmoretext">Multi-camera shoots</p> 

    </v-flex>
<v-flex id="service-controller" mx-5>
             <h2 id="services" class="text-none" flat v-on:click="readmoretext = !readmoretext">Additional Services</h2>
            <p id="lighting equipment" v-if="readmoretext">Professional video and lighting equipment</p>   
            <p id="voice Oversg" v-if="readmoretext">Voice Overs</p> 
            <p id="filming location" v-if="readmoretext">Filming location</p> 
            <p id="storyboarding3" v-if="readmoretext">Storyboarding</p> 
            <p id="stylist" v-if="readmoretext">Stylist</p> 
             <p id="set decorator" v-if="readmoretext">Set decorator</p> 

    </v-flex>

            
    </v-layout>
       <v-layout row valign-space-around  id="center-row-client"> 
        <span id="clients"> <b> Clients</b> </span>
    
    </v-layout>
           <v-layout row valign-space-around  id="center-row-client-logo"> 

      <v-flex id="service-controller" offset-xs1>
      
      <img id="client-logo" src="./assets/love3.png" alt="">
      <img id="client-logo" src="./assets/biosilk23.png" alt="">
      <img id="client-logo" src="./assets/kgs101.png" alt="">
      <img id="client-logo" src="./assets/lyl21.png" alt="">
      <img id="client-logo" src="./assets/marmara.png" alt="">
      <img id="client-logo" src="./assets/nakts17.png" alt="">
      <img id="client-logo" src="./assets/balti8.png" alt="">
      <img id="client-logo" src="./assets/itv.png" alt="">
      <img id="client-logo" src="./assets/lofbergs55.png" alt="">
      <img id="client-logo" src="./assets/skriveri9.png" alt="">
      
      
    
      
      </v-flex>


    
    </v-layout>
    <v-layout row id="center-bottom">
      <v-flex shrink pa-1>
        <v-card flat>

          
        </v-card>
      </v-flex>

      <v-flex grow pa-1>
        <v-card flat>
          <v-card-text>

            <div id="vertkrista">
                 <a href="#div-finalscroll" v-smooth-scroll>
               <span id="vert-line-text">contacts</span>
               <span id="vert-line"></span>

               </a>
          </div>


          </v-card-text>
        </v-card>
      </v-flex>

    

      <v-flex shrink pa-1>
        <v-card flat>

          <v-card-text></v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
    
  </v-container>

   <!-- Fourth Page END -->


    <!-- Fifht Page START -->

   <v-container fluid id="div-finalscroll">
   
    <v-layout row id="center-top">

      

      <v-flex grow pa-1>
        <v-card flat>
          <v-card-text>
           
           
              <a href="#">
              <img id="logo" src="./assets/logo.png" alt="">
         </a>
         
         
          </v-card-text>
        </v-card>
      </v-flex>

      
    </v-layout>
    <v-layout row valign-space-around id="center-row"> 

   
      <v-flex d-flex grow pa-1>
        <v-card flat>
          <v-card-text>    
            <h4 class>Text me!</h4>

            <a href="mailto:krista.pesecka@gmail.com" target="_blank"><h5 class>krista<span class="dotdot">.</span>pesecka@gmail.com</h5></a>
            


          </v-card-text>
        </v-card>
      </v-flex>

      <span v-flex xs12 class="mb-2" id="text-me-line"></span>

     

   
      
         
         

    
    </v-layout>
    <v-layout row id="center-bottom">


      <v-flex shrink pa-1>
          
           <a href="https://www.linkedin.com/in/krista-pesecka-48a316ba/" target="_blank"><img id="social-links" src="./assets/inal.png" alt=""></a>
      </v-flex>


      <v-flex shrink pa-1>
        <v-card flat>
        <a href="file:///C:/Users/k/Desktop/portfolio_project_2019/vue-portfolio/src/assets/Pesecka_CV.jpg" download> <v-card-text id="CV"> CV </v-card-text></a>


        </v-card>
      </v-flex>



      <v-flex grow pa-0>
        <v-card flat>
          <v-card-text>
               <span id="decision">SUCCESS IS A DECISION</span>
          <span v-flex xs12 class="mb-2" id="last-line"></span>
          </v-card-text>
        </v-card>
      </v-flex>


      <v-flex shrink pa-1>
        <v-card flat>
          <v-card-text></v-card-text>
        </v-card>
      </v-flex>
    </v-layout>

  </v-container>

  <!-- fifth Page END -->

 



  



  











    <!-- <v-content>
<v-toolbar flat >
    
<img id="logo" src="./assets/logo.png" alt="">
      <v-spacer></v-spacer>

  </v-toolbar>
      <v-layout row justify-center align-center>
  
        <span xs2>
         <h1 class>Creative Freedome</h1>
        </span>
  
    </v-layout>
      <v-layout justify-center align-bottom>
        <v-flex>
          <span id="social-links">  linkedin </span>
        </v-flex>
        <v-flex>
          <span id="vert-line-text">Let's meet</span>
          <span id="vert-line"></span>
        </v-flex>
      </v-layout>
    </v-content> -->

  </v-app>
</template>

<!-- Global site tag (gtag.js) - Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=UA-139889329-1"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'UA-139889329-1');
</script>

<script>

export default {
  name: 'App',
  components: {
 
  },
  data () {
        return {
            portraitimg: require('@/assets/kiki1.png'),
            logo: require('@/assets/logo.png'),
            readmoretext: false,
            dialog: false

        }
    }
}
</script>

<style>
.dotdot {
  font-family: Arial, Helvetica, sans-serif
}
#particles {
  position: absolute;
  height:80vh;
  width:100%;
}

#main-projects-left p:hover, #main-projects-right p:hover{
  color:#303236;
}

h2#content:hover, h2#video:hover, h2#services:hover{
  color:#61656d;
}

h2#content, h2#video, h2#services {
  margin: 0 0 25px 0; 
  
}


#main-projects-left {
  border-left: 1px solid #ffffff;
  margin: 1%;
  height: 200px;
  text-shadow: 0px 0px 0px;
  
}

#main-projects-left h3 {
  margin: 0 0 20px 0;
  font-size: 20px;
  color:#ffffff;
  text-transform: uppercase;
  
  
}
#main-projects-left p {
  line-height: 0.5 !important;
   font-size: 20px;
  color:#ffffff;
}

#main-projects-right {
  position: relative;
  height: 300px;
  text-align: right
  
}


#main-project-right-border {
   border-right: 1px solid #ffffff;
   height: 160px;
   position:absolute;
   right:0;
}

#main-projects-right h3 {
  margin: 0 0 20px 0;
  font-size: 20px;
  color:#ffffff;
  text-transform: uppercase;
  text-shadow: 0px 0px 0px;
}
#main-projects-right p {
  line-height: 0.5 !important;
   font-size: 20px;
  color:#ffffff;
  text-shadow: 0px 0px 0px;
}



.container {
  padding:0 !important;
}
#center-top{
  height: 10vh;
}
#center-row-projects{
  height: 80vh;
  position: relative;
}
#center-row{
  height: 80vh;
  position: relative;
}
#center-row-threeitems{
  height: 40vh;
  position: relative;
  width:70vw;
  margin: 0 auto
}

#center-row-client{
  height: 10vh;
  position: relative;
}

#center-row-client-logo{
  height: 20vh;
  position: relative;

}



#center-bottom{
  height: 10vh;
}

.theme--light.v-sheet {
    background-color: #ffffff00;
}
#app {
    font-family: "Adam";
      background: #cbcfd8;
}
#logo {
  height: 55px;
  position: absolute;
    top: 1%;
    left: 0%;

}

#social-links{
height: 3.5vh;
}

 #CV {
font-size: 3vh;
position: relative;
padding: 4.5%;
color: #000000;
  }

#vertkrista {
  position: relative;
  width: 100px;
  margin: 0 auto;
  display: block;
}

#vert-line {
  border-left: 1px solid #1e6266;
  height: 40px;
display:block;
margin-left: 40%;

  /* 
  position: absolute;
  right:51%;
  */
}
#vert-line-text {

    font-size: 18px;
    display:block
     /*
    position: absolute;
    top: -12%; 
    right: 51%;
    */ 
}






#vert-line-green {
  border-left: 1px solid #ffffff;
  height: 40px;
  display:block;
margin-left: 20%;
  /*align-content: 
  position: absolute;
  right:51%;
*/
}


  #vert-line-text-more {
    color:#ffffff;
    font-size: 18px;  display:block
  
  }




.theme--light.v-toolbar {
  background-color: #ffffff00;
}
@font-face {
  font-family: "Adam";
  src: url("assets/fonts/Adam.otf") format("otf");
  

  

}
  h1 {
    font-family: "Adam";
    text-shadow: 0px 0px 0px;
    text-transform: uppercase;
    font-weight: 500;
    color: black;
    font-size: 26px;
    text-shadow: 0px 0px 0px;
    position: relative;
    margin: 0;
    position: absolute;
    top: 50%;
    left: 50%;
    margin-right: -50%;
    transform: translate(-50%, -50%)
  }

  #me {
  font-family: "Adam";
    font-weight: 400;
    color: black;
    font-size: 26px;
    text-shadow: 0px 0px 0px;
    /*position: relative;
    margin: 0;
    position: absolute; 
    top: 50%;
    left: 50%;
    margin-right: -50%; */
    transform: translate(-50%, -50%);
    

  }

  #portraitimg {
   margin: 0 auto
  }

  #readmorebtn {
    margin-left: -17px;
    font-size: 20px;
  }

  p {
    font-size: 21px;
    color: black;

  }

  #fourlogo {
    position: absolute;
    bottom: 5vh;
    width:65vw;
    left: -5%;
  }

  #popupbox {
    background-color: #ffffff !important
  }

 
 #kon, #puikas, #skola, #pasaule
 {
   height: 8vh;
   
 }
 
  #candiestext
  {
    font-size: 1.8vh;
  }
   #brotherstext {
     font-size: 1.8vh;
  }

 

#cellotext {
  font-size: 1.8vh;

}



#tibettext {
  font-size: 1.8vh;
  
}

  #firstline {
  border-left: 0.1vh solid #1e6266;
  height: 75vh;
  position: absolute;
  left: 33%;
  top: 6%;
  }

  #horizantalline {
  border-top: 0.1vh solid #1e6266;
  width: 51vh;
  position: absolute;
  top: 6%;
  left: 6%;
  }
  
    #whiteline {
  border-left: 0.25vh solid #ffffff;
  height: 50vh;
  position: absolute;
  left: 6%;
  top: 4%;
  z-index: 100;
  }

  
  #wow
  {
    background-color: #1e6266;
    height: 80vw;
  }


  #trust {
  font-size: 3vh;
  color: #000000;
  position: relative;
  margin: 0 auto;
  
  text-shadow: 0px 0px 0px;
  }

#service-controller {
  box-sizing: border-box;
  
}
  

  #clients {
 height: 4vh; 
  margin: 0 auto;
   font-size: 3vh;
   text-shadow: 0px 0px 0px;
 

  }

  #center-row p {
  margin:0
  }
  #client-logo {
    height: 7vh;
    margin: 1vh;

  }

  h4 {
    font-family: "Adam";
    font-weight: 500;
    color: black;
    font-size: 26px;
    text-shadow: 0px 0px 0px;
    position: relative;
    margin: 0;
    position: absolute;
    top: 35%;
    left: 50%;
    margin-right: -50%;
    transform: translate(-50%, -50%)
  }

  h5 {

    font-family: "Adam";
    font-weight: 500;
    color: black;
    font-size: 26px;
    text-shadow: 0px 0px 0px;
    position: relative;
    margin: 0;
    position: absolute;
    top: 75%;
    left: 50%;
    margin-right: -50%;
    transform: translate(-50%, -50%)
    

  }

  #text-me-line {
  border-left: 0.15vh solid #1e6266;
  height: 15vh;
  position: relative;
  margin: 0;
  position: absolute;
  top: 55%;
  left: 50%;
  margin-right: -50%;
  transform: translate(-50%, -50%)
  }

  #location-line {
  border-left: 0.15vh solid #1e6266;
  height: 5vh;
  position: relative;
  margin: 0;
  position: absolute;
  top: 95%;
  left: 85%;
  margin-right: -50%;
  transform: translate(-50%, -50%)

  }

  #location {
  
  height: 5vh;
  position: relative;
  margin: 0;
  position: absolute;
  top: 95%;
  left: 87%;
  margin-right: -50%;
  transform: translate(-50%, -50%)
  }

  #decision {
    position: relative;
    left: 40%;
     font-family: "Adam";
    text-transform: uppercase;
    font-weight: 500;
    color: black;
    font-size: 26px;
    text-shadow: 0px 0px 0px;
    
  }

  #last-line {
  border-top: 0.15vh solid #1e6266;
  width: 32.5vh;
  position: absolute;
  top: 7%;
  left: 40%;

  }

  
</style>
