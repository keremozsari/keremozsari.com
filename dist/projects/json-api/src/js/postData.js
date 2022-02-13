let name = document.querySelector('#name'),
    job = document.querySelector('#job'),
    postData = document.querySelector('#postData');
    alertSuccess = document.querySelector('.alert--success');
    alertError = document.querySelector('.alert--error');

postData.addEventListener('click', function (){
    if(name.value && job.value){
        var xhr = new XMLHttpRequest();
        xhr.open("POST", 'https://reqres.in/api/users');
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.onload = function () {
            if(xhr.status === 201 && xhr.readyState === 4){
                let post = xhr.responseText;
                alertSuccess.style.display = "flex";
                setTimeout(function () {
                    alertSuccess.style.display = "none";
                },5000);
            }else{
                return false;
            }
        }
        xhr.send(JSON.stringify({
            name: name.value,
            job: job.value
        }));
    } else {
        alertError.style.display = "flex";
        setTimeout(function () {
            alertError.style.display = "none";
        },5000);
    }
})
