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
            <b-col cols="4" class="pic">
              <b-img
                rounded="circle"
                class="img-fluid"
                alt="Circle image"
                width="200px"
                src="https://scontent.fbkk12-3.fna.fbcdn.net/v/t1.0-9/70617299_2381769458577656_2519527514909442048_n.jpg?_nc_cat=102&_nc_oc=AQlRmpzhxGzrsvtSABMTTPiGtEsGCtn9JBQV6N2cPl5QE-JMPIsWymuTavJzkTyPrhI&_nc_ht=scontent.fbkk12-3.fna&oh=33f0219cf224e6f91615fc2e8846ca44&oe=5E084293"
              />
            </b-col>
            <b-col cols="8" class="aboutme">
              <div>
                <h4>About me</h4>
                {{aboutme}}
                <br />BACHELOR OF ENGINEERING – ENGINEER , PRINCE OF SONGKLA UNIVERSITY ,PHUKET THAILAND.
              </div>
            </b-col>
          </b-row>
          <!-- <hr /> -->
          <b-row class="mt-5 mb-5">
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
          </b-row>
          <!-- <hr /> -->
          <b-row class="mt-5 mb-5">
            <b-row v-b-toggle.collapse-1>
              <b-col cols="12" class="btn-git outline-effect d-flex">
                <div>
                  <h4>
                    <i class="fab fa-github"></i> Git Repository
                  </h4>
                </div>
                <div>
                  <h6 class="animated infinite flash delay-1s">Click !</h6>
                </div>
              </b-col>
            </b-row>

            <b-collapse id="collapse-1" class="mt-2">
              <b-row>
                <b-col cols="3" v-for="item in repo" v-bind:key="item.id">
                  <a style="text-decoration:none" v-bind:href="item.url">
                    <div class="git outline-effect">{{ item.name }}</div>
                  </a>
                </b-col>
              </b-row>
            </b-collapse>
          </b-row>

          <b-row class="mt-5">
            <b-col cols="12" class="aboutme">
              <div>
                <h4>Skills</h4>
              </div>
            </b-col>
          </b-row>

          <b-row class="mt-1">
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
        "https://scontent.fbkk12-2.fna.fbcdn.net/v/t1.0-9/71392148_2385463934874875_6535706301882695680_o.jpg?_nc_cat=105&_nc_oc=AQmb3ei8tmWkEffURzDgrehZzwN1dWJ8LJ-79m3kYfW08wIDmNiuhYZ4svu8h6hLTtE&_nc_ht=scontent.fbkk12-2.fna&oh=b91132a80018d2f11680af4468a6524f&oe=5DF46BC2"
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
}

.con {
  width: 100%;
  height: 100%;
  background-image: url("https://scontent.fbkk12-2.fna.fbcdn.net/v/t1.0-9/71392148_2385463934874875_6535706301882695680_o.jpg?_nc_cat=105&_nc_oc=AQmb3ei8tmWkEffURzDgrehZzwN1dWJ8LJ-79m3kYfW08wIDmNiuhYZ4svu8h6hLTtE&_nc_ht=scontent.fbkk12-2.fna&oh=b91132a80018d2f11680af4468a6524f&oe=5DF46BC2");
  background-position: center center;
  background-size: cover;
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
</style>
