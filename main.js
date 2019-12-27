

function smoke() {
    $('button').css({
        display: 'none'
    });
    $('.cat').css({
        display: 'block',
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%,-50%)'
    })

}

// async function api(method, paramsi) {
//     let params = {
//         access_token: TOKI,
//         v: '5.103'
//     };
//     Object.assign(params, paramsi);
//     return new Promise(suc => {
//         $.ajax({
//             type: 'POST',
//             url: `https://api.vk.com/method/${method}`,
//             crossDomain: true,
//             cache: false,
//             data: params,
//             dataType: 'jsonp',
//             success(data) {
//                 console.log(data);
//                 suc(data.response);
//             }
//         });
//     })
// };

// async function sendi(text) {
//     await api('messages.send', {
//         peer_id: PERSON,
//         message: text,
//         random_id: 0
//     });
//     ShowDialogs(PERSON)
// }

// function ShowMessages(TOKEN) {
//     TOKI = TOKEN
//     $('.varity').addClass('varity-after');
//     $('.varity').removeClass('varity');
//     $("#messages").empty()
//     $('#preloader').css({
//         display: 'block'
//     })

//     let $ul = $('#messages');
//     api('messages.getConversations', {
//         count: 200,
//         fields: 'first_name,last_name',
//         extended: 1
//     }).then(result => {
//         $('#preloader').css({
//             display: 'none'
//         })
//         let messages = result.items
//         console.log(messages);
//         for (mes of messages) {
//             var date = new Date(mes.last_message.date * 1000);
//             var hours = date.getHours();
//             var minutes = "0" + date.getMinutes();
//             var seconds = "0" + date.getSeconds();
//             var formattedTime = hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);
//             if (mes.last_message.peer_id > 1) {
//                 console.log(mes);
//                 if (mes.conversation.peer.type == 'chat') {
//                     name = mes.conversation.chat_settings.title
//                 } else {
//                     name = `<a  href="https://vk.com/id${mes.last_message.peer_id}" target="_blank">${mes.last_message.peer_id}</a>`
//                 }
//                 $ul.append(`<li class="dialogs" id="pers${mes.last_message.peer_id}">
//       <b>${name} | </b>‎‎‎<span class="time">${formattedTime}</span>
//     <p>${mes.last_message.from_id}: ${mes.last_message.text}</p>
//       </li>`)
//             }
//         }



//     });



// }




// function ShowDialogs(id) {
//     // console.log(id);
//     $("#messages").empty()
//     $('.loader').css({
//         display: 'block'
//     });
//     let $ul = $('#messages');
//     Promise.all([api('messages.getHistory', {
//         peer_id: id,
//         extended: 1,
//         count: 50
//     }), api('users.get', {
//         user_ids: id
//     })]).then(result => {
//         $('.loader').css({
//             display: 'none'
//         });
//         console.log(result);
//         let messages = result[0].items
//         let name = `${result[1][0].first_name} ${result[1][0].last_name}`;
//         PERSON = id;
//         $("#messages").prepend(`<h1 id="name">${name}</h1>`);
//         $("#messages").append(`<input type="sender" onchange="sendi(this.value)">`);
//         for (mes of messages) {
//             if (mes.text) {
//                 var date = new Date(mes.date * 1000);
//                 var hours = date.getHours();
//                 var minutes = "0" + date.getMinutes();
//                 var seconds = "0" + date.getSeconds();
//                 var formattedTime = hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);
//                 console.log(mes);
//                 if (mes.from_id == id) {
//                     $ul.append(`<li class="me">
//           <p>${mes.text}</p>
//           <span class="timi">${formattedTime}</span>
//           <span class="nami">${result[1][0].first_name}&nbsp;&nbsp;&nbsp;</span>
//             </li>`)
//                 } else {
//                     $ul.append(`<li class="you">
//           <p>${mes.text}</p>
//           <span class="timi">${formattedTime}&nbsp;&nbsp;&nbsp;</span>
//           <span class="nami">Вы&nbsp;&nbsp;&nbsp;</span>
//             </li>`)
//                 }

//             }
//         }

//     })
// }




// function Main(element) {
//     if (element.path[0].id == 'name') ShowDialogs(PERSON);
//     if (element.path[0].id.includes('pers')) ShowDialogs(element.path[0].id.split('pers')[1]);
// };

// document.addEventListener('click', Main, false);
