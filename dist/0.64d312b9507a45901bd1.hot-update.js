require("source-map-support").install(),exports.id=0,exports.modules={"./resources/user/user.model.js":function(e,r,s){"use strict";s.r(r);var t=s("mongoose"),o=s.n(t),a=s("bcryptjs"),n=s.n(a),u=new o.a.Schema({email:{type:String,unique:!0,required:!0},password:{required:!0,type:String}});u.methods={authenticate:function(e){return n.a.compareSync(plaintTextPassword,this.password)},hashPassword:function(e){if(e){var r=n.a.genSaltSync(10);return n.a.hashSync(e,r)}throw new Error("could not save user! no plainTextPassword provided")}},exports.default=User=o.a.model("User",u)}};
//# sourceMappingURL=0.64d312b9507a45901bd1.hot-update.js.map