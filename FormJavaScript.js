const form = document.getElementById('form');
        const fname = document.getElementById('fname');
        const lname = document.getElementById('lname');
        const age = document.getElementById('age');
        const email = document.getElementById('email');
        const mobile = document.getElementById('mobile');
        const edu = document.getElementById('edu');
        const desc = document.getElementById('desc');
 
        form.addEventListener('submit', e => {
            e.preventDefault();
 
            checkInputs();
            console.log('Form submitted')
        });
 
        function checkInputs() {
            // trim to remove the whitespaces
            const fnameValue = fname.value.trim();
            const lnameValue = lname.value.trim();
            const ageValue = age.value.trim();
            const emailValue = email.value.trim();
            const mobileValue = mobile.value.trim();
            const eduValue = edu.value.trim();
            const descValue = desc.value.trim();
 
            if (fnameValue === '') {
                setErrorFor(fname, 'First name cannot be blank');
            } else {
                setSuccessFor(fname);
            }

            if (lnameValue === '') {
                setErrorFor(lname, 'Last name cannot be blank');
            } else {
                setSuccessFor(lname);
            }
            if (ageValue === '') {
                setErrorFor(age, 'Age cannot be blank');
            } else {
                setSuccessFor(age);
            }
            
            if (emailValue === '') {
                setErrorFor(email, 'Email cannot be blank');
            } else if (!isEmail(emailValue)) {
                setErrorFor(email, 'Not a valid email');
            } else {
                setSuccessFor(email);
            }
 
            if (mobileValue === '') {
                setErrorFor(mobile, 'Password cannot be blank');
            } else {
                setSuccessFor(mobile);
            }
            if (eduValue === '') {
                setErrorFor(edu, 'Password cannot be blank');
            } else {
                setSuccessFor(edu);
            }
            if (descValue === '') {
                setErrorFor(desc, 'Password cannot be blank');
            } else {
                setSuccessFor(desc);
            }

        }
 
        function setErrorFor(input, message) {
            const formControl = input.parentElement;
            const small = formControl.querySelector('small');
            formControl.className = 'form-control error';
            small.innerText = message;
        }
 
        function setSuccessFor(input) {
            const formControl = input.parentElement;
            formControl.className = 'form-control success';
        }
 
        function isEmail(email) {
            return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
        }
