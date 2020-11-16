<template>
  <div class="out">
    <div class="con">
      <div class="con-inside">
        <b-container class="p-5">
          <b-row>
            <b-col cols="12 bg-full-name">
              <div class="full-name">PUMIN SWANGJANG</div>
              <div>Full Stack Web Developer</div>
            </b-col>
          </b-row>
          <b-row class="mt-5 mb-5">
            <b-col sm="4" class="pic mb-2 mt-2">
              <b-img
                rounded="circle"
                class="img-fluid"
                alt="Circle image"
                width="200px"
                src="https://scontent.fbkk5-6.fna.fbcdn.net/v/t1.0-9/70617299_2381769458577656_2519527514909442048_n.jpg?_nc_cat=102&ccb=2&_nc_sid=174925&_nc_eui2=AeFVi5HGltuOvqHJzGH1ohCJymBYLp_329bKYFgun_fb1vPw7NfRqyPMMJooXnEEDNkzW9TtC1IElOXC16QEE0z2&_nc_ohc=IspQZRe6hFwAX8p6Fck&_nc_ht=scontent.fbkk5-6.fna&oh=b73d591eb32d5bff0e9abaffbf9a63f3&oe=5FD7A66D"
              />
            </b-col>
            <b-col sm="8" class="aboutme">
              <div>
                <h4>About me</h4>
                {{aboutme}}
                <br />BACHELOR OF ENGINEERING – ENGINEER , PRINCE OF SONGKLA UNIVERSITY ,PHUKET THAILAND.
              </div>
            </b-col>
          </b-row>
          <hr />
          <!-- <b-row class="mt-5 mb-5">
            <b-col cols="6" class="contact">
              <b-row>
                <b-col cols="12">
                  <div>
                    <h4>Contact</h4>
                    <div>
                      <i class="fas fa-envelope"></i> : puminx@hotmail.com
                    </div>
                    <div>
                      <i class="fas fa-mobile-alt"></i> : 083-1760760
                    </div>
                    <div>
                      <i class="fab fa-facebook-square"></i> :
                      <a
                        href="https://www.facebook.com/boy.reallife"
                        target="_blank"
                      >Pumin Swangjang</a>
                    </div>
                  </div>
                </b-col>
              </b-row>
            </b-col>
          </b-row>-->
          <!-- <hr /> -->
          <b-row class="mt-5">
            <b-col cols="12" class="d-flex justify-contents-center align-items-center aboutme">
              <div>
                <h4>
                  <i class="fas fa-pen"></i> Skills
                </h4>
              </div>
            </b-col>
          </b-row>

          <b-row class="mt-1 mb-5">
            <b-col cols="12" class="skills">
              <i class="fab fa-react m-2" />
              <i class="fab fa-vuejs"></i>
              <i class="m-2 fab fa-html5"></i>
              <i class="m-2 fab fa-css3-alt"></i>
              <i class="m-2 fab fa-js-square"></i>
              <i class="m-2 fab fa-npm"></i>
              <i class="m-2 fas fa-database"></i>
              <i class="m-2 fab fa-node"></i>
              <i class="m-2 fab fa-bootstrap"></i>
              <i class="m-2 fab fa-linux"></i>
              <i class="m-2 fab fa-ubuntu"></i>
              <i class="m-2 fab fa-apple"></i>
              <i class="fab fa-github"></i>
            </b-col>
          </b-row>
          <hr />
          <b-row class="mt-5">
            <b-col cols="12" class="d-flex justify-contents-center align-items-center aboutme">
              <div>
                <h4>
                  <i class="fab fa-github"></i> Git Repository
                </h4>
              </div>
            </b-col>
          </b-row>

          <b-row class="mt-2 mb-5">
            <div class="d-md-flex" v-for="item in repo" v-bind:key="item.id">
              <a style="text-decoration:none" v-bind:href="item.url">
                <div class="git outline-effect">{{ item.name }}</div>
              </a>
            </div>
          </b-row>

          <hr />
          <div class="updating mt-5">Updating ....</div>
        </b-container>
      </div>
    </div>
  </div>
</template>



<script>
import axios from "axios";
export default {
  name: "HelloWorld",
  data: function() {
    return {
      repo: [],
      aboutme:
        "I am creative, responsible and can compose Java script to create website through my experience . I’m seeking a position desired with the developing website by Java script or career field where I can utilize my knowledge and skills along with my experience in the organization.",
      url_image:
        "https://scontent.fbkk5-5.fna.fbcdn.net/v/t1.0-9/118767481_3213132485441345_4473891121915720130_o.jpg?_nc_cat=104&ccb=2&_nc_sid=730e14&_nc_eui2=AeG9FEhGer3j1WvtyO35PjFufZG9MKsHnWN9kb0wqwedYwLxrBC6EzDmaDqESHjvCADKaDteNmdCw5gGk2encN6q&_nc_ohc=j2yazInvtvkAX9rJAQ1&_nc_ht=scontent.fbkk5-5.fna&oh=406aab8cdfc8af649f56f19a8bf0f95e&oe=5FD834DF"
    };
  },
  mounted() {
    axios
      .get("https://api.github.com/users/fvck3oy/repos")
      .then(response => {
        this.repo = response.data.map(item => {
          return {
            name: item.name,
            url: item.html_url
          };
        });
        console.log("data get : ", this.repo);
      })
      .catch(error => {
        console.log(error);
      });
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #ffffff;
}

hr {
  border-top: 1px solid rgb(255, 255, 255);
}

.pic {
  display: flex;
  justify-content: center;
  align-items: center;
}

@media (max-width: 575px) {
  .full-name {
    color: #ffffff;
    font-size: 20px !important;
  }
  .aboutme {
    font-size: 12px !important;
  }
  .contact {
    font-size: 12px !important;
  }
  .skills {
    font-size: 20px !important;
  }
}

@media (min-width: 576px) {
  .full-name {
    color: #ffffff;
    font-size: 30px !important;
  }
  .aboutme {
    font-size: 14px !important;
  }
  .contact {
    font-size: 14px !important;
  }
  .skills {
    font-size: 20px !important;
  }
}

@media (min-width: 768px) {
  .full-name {
    color: #ffffff;
    font-size: 40px !important;
  }
  .aboutme {
    font-size: 16px !important;
  }
  .contact {
    font-size: 16px !important;
  }
  .skills {
    font-size: 25px !important;
  }
}
@media (min-width: 992px) {
  .full-name {
    color: #ffffff;
    font-size: 50px !important;
  }
  .aboutme {
    font-size: 18px !important;
  }
  .contact {
    font-size: 18px !important;
  }
  .skills {
    font-size: 30px !important;
  }
}

@media (min-width: 1200px) {
  .full-name {
    color: #ffffff;
    font-size: 60px !important;
  }
  .aboutme {
    font-size: 20px !important;
  }
  .contact {
    font-size: 20px !important;
  }
  .skills {
    font-size: 40px !important;
  }
}

.con {
  width: 100%;
  height: 100%;
  background-image: url("https://scontent.fbkk5-5.fna.fbcdn.net/v/t1.0-9/118767481_3213132485441345_4473891121915720130_o.jpg?_nc_cat=104&ccb=2&_nc_sid=730e14&_nc_eui2=AeG9FEhGer3j1WvtyO35PjFufZG9MKsHnWN9kb0wqwedYwLxrBC6EzDmaDqESHjvCADKaDteNmdCw5gGk2encN6q&_nc_ohc=j2yazInvtvkAX9rJAQ1&_nc_ht=scontent.fbkk5-5.fna&oh=406aab8cdfc8af649f56f19a8bf0f95e&oe=5FD834DF");
  background-position: center center;
  background-size: cover;
	background-attachment: fixed;
  /* color: #fff; */
}
.con-inside {
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
}
.full-name {
  color: #ffffff;
  font-size: 60px;
}
.aboutme {
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
}
.contact {
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
}
.bg-full-name {
  color: #fff;
  /* background-color: rgba(0, 0, 0, 0.5); */
}
.git {
  color: #fff;
}
.btn-git {
  color: #fff;
  cursor: pointer;
}
.outline-effect {
  text-overflow: ellipsis;
  overflow: hidden;
  cursor: pointer;
  padding: 10px;
  background: transparent;
  /* border: 0.5px #fff solid; */
  border-radius: 5px;
  /* box-shadow: inset 0 0 20px rgba(255, 255, 255, 0); */
  /* outline: 1px solid; */
  outline-color: rgba(255, 255, 255, 0.5);
  outline-offset: 0px;
  text-shadow: none;
  transition: all 1250ms cubic-bezier(0.19, 1, 0.22, 1);
}

.outline-effect:hover {
  border: 1px solid;
  box-shadow: inset 0 0 20px rgba(255, 255, 255, 0.5),
    0 0 20px rgba(255, 255, 255, 0.2);
  outline-color: rgba(255, 255, 255, 0);
  outline-offset: 15px;
}

.skills {
  color: #fff;
  font-size: 50px;
}
.updating {
  color: #fff;
}
</style>
