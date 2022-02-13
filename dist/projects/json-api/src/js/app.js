// Get Members
let totalPage,
    paginateTemp = '',
    startPage = 1,
    pagination = document.querySelector('.js-paginate'),
    paginationNext = document.querySelector('.js-paginate-next'),
    cardWrapper = document.querySelector('.js-card'),
    paginationPrev = document.querySelector('.js-paginate-prev'),
    detailBtn,
    detailBtn2,
    activeId,
    detailPage = false;

fetch('https://reqres.in/api/users')
.then(response => response.json())
.then((data) => {
    totalPage = data.total_pages;
    let members = data.data,
        membersTemp = '';
    for (let i = 0; totalPage > i; i++){
        paginateTemp += `<span data-id="${i + 1}" class="js-page">${i + 1}</span>`
    }

    for(let i = 0; members.length > i; i++){
        membersTemp += ` 
            <div id="${members[i].id}" class="card__item">   
                <div class="card__item__image">
                    <img src="${members[i].avatar}" alt="profilePhoto" class="card__item__image__img">
                </div>
                <div class="card__item__information"> 
                    <div class="card__item__information__name">${members[i].first_name} ${members[i].last_name}</div>
                    <div class="card__item__information__mail">${members[i].email}</div>
                </div>
                <div class="card__item__review">
                    <a data-id="${members[i].id}" href="javascript:;" type="button" class="card__item__review__button js-detail">
                        Review 
                    </a>
                    <a data-id="${members[i].id}" href="javascript:;" type="button" class="card__item__review__button js-back none"> 
                        Back
                    </a>
                </div>
            </div>`;
        cardWrapper.innerHTML = membersTemp;
        detailBtn = document.querySelectorAll('.js-detail')

        for (let i = 0; detailBtn.length > i; i++){
            detailBtn[i].addEventListener('click', function (){
                activeId = detailBtn[i].getAttribute('data-id')
                console.log(activeId)
                openDetail(activeId)
            })
        }
    }
    pagination.innerHTML = paginateTemp;

    let activePage = document.querySelectorAll('.js-page');

    activePage[0].classList.add('active');

    for(let i = 0; activePage.length > i; i++){

        activePage[i].addEventListener('click', function (){
            for (let i = 0; activePage.length > i; i++){
                activePage[i].classList.remove('active')
            }
            activePage[i].classList.add('active');
            getMember(activePage[i].getAttribute('data-id'))
        })
    }

})

if(paginationNext){
    paginationNext.addEventListener('click', (e)=>{
        if(totalPage <= startPage){
            return false
        } else {
            startPage++;
           let addActive =  document.querySelectorAll('.js-page');

           for (let i = 0; addActive.length > i; i++){
               addActive[i].classList.remove('active')
           }

           addActive[startPage - 1].classList.add('active');
        }

        getMember(startPage);
    })
}

if(paginationPrev){
    paginationPrev.addEventListener('click', (e)=>{
        if(totalPage > startPage){
            return false
        } else {
            startPage--;
            let addActive =  document.querySelectorAll('.js-page');

            for (let i = 0; addActive.length > i; i++){
                addActive[i].classList.remove('active')
            }

            addActive[startPage - 1].classList.add('active');
        }

        getMember(startPage);
    })
}

getMember = (page) => {
    fetch(`https://reqres.in/api/users?page=${page}`)
    .then(response => response.json())
    .then((data) => {
        let members = data.data,
            membersTemp = '';

        for(let i = 0; members.length > i; i++){
            membersTemp += ` 
            <div id="${members[i].id}" class="card__item"> 
                <div class="card__item__image">
                    <img src="${members[i].avatar}" alt="profilePhoto" class="card__item__image__img">
                </div>
                <div class="card__item__information">
                    <div class="card__item__information__name">${members[i].first_name} ${members[i].last_name}</div>
                    <div class="card__item__information__mail">${members[i].email}</div>
                </div>
                <div class="card__item__review">
                    <a data-id="${members[i].id}" href="javascript:;" type="button" class="card__item__review__button js-detail">
                        Review
                    </a>   
                    <a data-id="${members[i].id}" href="javascript:;" type="button" class="card__item__review__button js-back none"> 
                        Back
                    </a>
                </div>
            </div>`;
            cardWrapper.innerHTML = membersTemp;
            detailBtn = document.querySelectorAll('.js-detail')

            for (let i = 0; detailBtn.length > i; i++){
                detailBtn[i].addEventListener('click', function (){
                    activeId = detailBtn[i].getAttribute('data-id')
                    openDetail(activeId)
                })
            }
        }
    })
}

openDetail = (id) => {
    detailPage = true
    let allMembers = document.querySelectorAll('.card__item'),
        //allBtn = detailBtn,
        thisMember = document.querySelector(`[id = "${id}"]`);
    if(detailPage){
        for(let i = 0; allMembers.length > i; i++){
            allMembers[i].closest('.card__item').classList += ' none';
            allMembers[i].closest('.card__item').classList.remove('none');
            allMembers[i].closest('.card__item').classList.remove('active');
            allMembers[i].closest('.card__item').classList += ' none';
        }

        thisMember.classList.remove('none');
        thisMember.classList += ' active';
        thisMember.closest('.card').classList += ' grid-1';
        thisMember.querySelector('.js-detail').classList.add('none')
        thisMember.querySelector('.js-back').classList.remove('none')
       let backPage = thisMember.querySelector('.js-back');

       backPage.addEventListener('click', function (){
           thisMember.querySelector('.js-detail').classList.remove('none')
           thisMember.querySelector('.js-back').classList.add('none')
           closeDetail();
       })
    }

    if(detailPage){
        let member = document.querySelector('.members'),
            pagination = document.querySelector('.pagination');

        member.classList.add('visible');
        pagination.classList.add('visible');
    }
}

closeDetail = () => {
    detailPage = false
    let allMembersClose = document.querySelectorAll('.card__item');
    if(detailPage === false){
        for(let i = 0; allMembersClose.length > i; i++){
            allMembersClose[i].closest('.card__item').classList.remove('none');
            allMembersClose[i].closest('.card__item').classList.remove('active');
            allMembersClose[i].closest('.card').classList.remove('grid-1');
        }
    }

    if(!detailPage){
        let member = document.querySelector('.members'),
            pagination = document.querySelector('.pagination');

        member.classList.remove('visible');
        pagination.classList.remove('visible');
    }
}