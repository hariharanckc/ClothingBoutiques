import { Component,Renderer2 } from '@angular/core';
import { Router } from '@angular/router';
import { FaceapiServiceService } from 'src/app/services/faceapi-service.service';


@Component({
  selector: 'app-facescanning',
  templateUrl: './facescanning.component.html',
  styleUrls: ['./facescanning.component.css']
})
export class FacescanningComponent { 
  video!:HTMLVideoElement
  errorDiv!:HTMLDivElement
  flag:string='notScanned'
  // RegisterNumber!:string
  // currentYear= new Date().getFullYear();
  // index:number=0
  results:any;

  constructor(private render:Renderer2,private faceApi:FaceapiServiceService,public router:Router){}

  ngOnInit(): void {
    // this.RegisterNumber=this.route.snapshot.params['registerNumber']
    this.video=this.render.selectRootElement('#myVideo') as HTMLVideoElement
    this.errorDiv=this.render.selectRootElement(".errorMessage")
    this.startVideo()
  }
  async startVideo(){
    // this.errorDiv.innerHTML=""
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      if (this.video) {
        this.video.srcObject = stream;
        this.video.addEventListener('play', async()=>{
          console.log("working");
          
          try{
            this.results=await this.faceApi.startInterval(this.video,this.errorDiv)
           this.faceApi.create({'faceLandmark':this.results})
            // if(results.length>0){
            //   this.Couch.faceUpdate(results,this.RegisterNumber,this.currentYear)
              this.flag='Scanned';
                          // }
         
        }catch(error){
          console.log(error)
        }
        })
      }
    } catch (error) {
      console.error('Error accessing webcam:', error);
    }
  }

  faceloginpage(){
    this.router.navigateByUrl('/admindashboard');

  }

}
