import React from 'react'
import './Widget.css'


export const Widget = () => {

    function openForm() {
        document.getElementById("myForm").style.display = "block";
    }

    function closeForm() {
        document.getElementById("myForm").style.display = "none";
    }
    function fileName(){
        var inputfile = document.querySelector('.file');
        
        
        var filename1 = inputfile.value.replace(/^.*[\\]/, '');
        var label1 = document.querySelector('#name');
        label1.innerHTML = filename1;
        // console.log("Uploaded file : " + filename1);
    }
    
    function submit() {
        let message = document.querySelector('#message');
        let input = document.querySelector('.file');
        let size;
        try {
            size = input.files[0].size;    
        } catch (error) {
            // console.log("File not uploaded error");
            message.innerHTML = "File not uploaded."
            return;
        }
        

        if(input.value && size/1024 <= 5120){
            document.getElementById("myForm").style.display = "none";
            document.querySelector('.open-button').style.display = "none";

            alert("Sucessfully uploaded!");
            document.querySelector('.alert').style.display = 'block'; 
            
            }
        
        else{
            if(!input.value)
                message.innerHTML = "Please upload your image first."
            else{
                message.innerHTML = "Please upload image of size upto 5MB."
                return;
            }
            
        }

        
    }
    
    
    return (
        <div>
            <button className="open-button" onClick={ openForm }><i className="fa-solid fa-user-check">Start KYC</i></button>
            <div className="form-popup" id="myForm">
                
                <form action="" className="form-container">
            <div class="btn cancel" onClick={ closeForm }>×</div>
                
                    <h2>Upload Document IDs</h2>

                    <div className="file-input">
                    <input type="file" id="file" className="file" accept="image/*" required onChange={fileName} />
                    <label htmlFor="file" id="name">
                        <i className="bi bi-card-image"></i> Drag or drop your file.
                        <p className="file-name"></p>
                    </label>
                    </div>
                    <p ><small>Note: Supported file formats .JPG/.JPEG/.PNG file. File size should not be more than 5 MB.</small></p>
                    <p><span id="message"></span></p>

                    <img src="images/Demo.jpg" alt="Demo" height="130px" width="210px" id="demo-img" />
                    <button type="button" className="btn submit" onClick='#' >Submit</button>
                   
                    <p><small>This information is used for identification only, and will be kept secure.</small></p>
                </form>
            </div>

        </div>
    )
    }
