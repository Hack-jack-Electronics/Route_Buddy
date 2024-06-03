document.addEventListener('DOMContentLoaded', function () {
    const tour = new Shepherd.Tour({
      useModalOverlay: true,
      defaultStepOptions: {
        scrollTo: { behavior: 'smooth', block: 'center' }
      }
    });
  
    tour.addStep({
      id: 'logo-step',
      text: 'Hey! Welcome to RouteBuddy. Let\'s take a tour of our website.',
      attachTo: {
      },
      buttons: [
        {
          text: 'Start',
          action: tour.next
        },{
            text:'No, Thanks!',
            action:function(){
                tour.cancel();
            }
        }
      ]
    });
  
    tour.addStep({
      id: 'What-do-we-do',
      text: 'Let\'s get started by knowing what we do!',
      attachTo: {
        element: ".main-content .section .heading",
        on: 'top-start'
      },
      buttons: [
        {
          text: 'Back',
          action: tour.back
        },
        {
          text: 'Next',
          action: tour.next
        },{
            text:'Exit',
            action:function(){
                tour.cancel();
            }
        }
      ],
      classes: 'custom-class',
      popperOptions: {
        modifiers: [{ name: 'offset', options: { offset: [0, 8] } }]
      }
    });
    tour.addStep({
        id: 'aboutus-step',
        text: 'Now, let\'s know more about us.',
        attachTo: {
          element: '#aboutus',
          on: 'top-start'
        },
        buttons: [
          {
            text: 'Back',
            action: tour.back
          },
          {
            text: 'Next',
            action: tour.next
          },{
              text:'Exit',
              action:function(){
                  tour.cancel();
              }
          }
        ],
        classes: 'custom-class',
        popperOptions: {
          modifiers: [{ name: 'offset', options: { offset: [0, 8] } }]
        }
      });

      tour.addStep({
        id: 'why route-buddy',
        text: 'Why choose us?',
        attachTo: {
          element: '#why',
          on: 'top-start'
        },
        buttons: [
          {
            text: 'Back',
            action: tour.back
          },
          {
            text: 'Next',
            action: tour.next
          },{
              text:'Exit',
              action:function(){
                  tour.cancel();
              }
          }
        ],
        classes: 'custom-class',
        popperOptions: {
          modifiers: [{ name: 'offset', options: { offset: [0, 8] } }]
        }
      });
      tour.addStep({
        id: 'Languages',
        text: 'Here, you can change your preferred language!',
        attachTo: {
          element: '#language',
          on: 'bottom'
        },
        buttons: [
          {
            text: 'Back',
            action: tour.back
          },
          {
            text: 'Next',
            action: tour.next
          },{
              text:'Exit',
              action:function(){
                  tour.cancel();
              }
          }
        ],
        classes: 'custom-class',
        popperOptions: {
          modifiers: [{ name: 'offset', options: { offset: [0, 8] } }]
        }
      });
      tour.addStep({
        id: 'Signup',
        text: 'Please Sign up if you are new to us.',
        attachTo: {
          element: '#signup',
          on: 'top-end'
        },
        buttons: [
          {
            text: 'Back',
            action: tour.back
          },
          {
            text: 'Next',
            action: tour.next
          },{
              text:'Exit',
              action:function(){
                  tour.cancel();
              }
          }
        ],
        classes: 'custom-class',
        popperOptions: {
          modifiers: [{ name: 'offset', options: { offset: [0, 8] } }]
        }
      });
      tour.addStep({
        id: 'signin',
        text: 'Please Sign in if an existing user!',
        attachTo: {
          element: '#signin',
          on: 'top-start'
        },
        buttons: [
          {
            text: 'Back',
            action: tour.back
          },{
              text:'Exit',
              action:function(){
                  tour.cancel();
              }
          }
        ],
        classes: 'custom-class',
        popperOptions: {
          modifiers: [{ name: 'offset', options: { offset: [0, 8] } }]
        }
      });
    
  
    tour.start();
  });


