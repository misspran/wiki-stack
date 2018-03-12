<<<<<<< HEAD
const Sequelize = require('sequelize')
=======
const Sequelize = require('sequelize');
>>>>>>> cd722e20336fb1cb7f4fea5ecfaf1e2da7faa199
var db = new Sequelize('postgres://localhost:5432/wikistack', {
    logging: false
});


<<<<<<< HEAD

const Page = db.define('page', {
  title: {
    		type: Sequelize.STRING,
    		allowNull: false
		 },
  urlTitle: {
    		type: Sequelize.STRING,
    		allowNull: false
		 },
  content: {
    		type: Sequelize.TEXT,
    		allowNull: false
		 },
  status: Sequelize.ENUM('open', 'closed'),
  date: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW
    },
 },

 { getterMethods: {
   	urlTitle(value){
   		urlTitle = '/wiki/' + this.urlTitle;
   		return urlTitle;
   	}
   }
=======
const Page = db.define('page', {
    title: {
        type: Sequelize.STRING,
        allowNull: false
    },
    urlTitle: {
        type: Sequelize.STRING,
        allowNull: false
    },
    content: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    status: {
        type: Sequelize.ENUM('open', 'closed')
    },
    date: {
    type: Sequelize.DATE,
    defaultValue: Sequelize.NOW
  }
  },
  {
  getterMethods: {
    url(){
      return '/wiki/'+this.urlTitle;
    }
  },
>>>>>>> cd722e20336fb1cb7f4fea5ecfaf1e2da7faa199


});

<<<<<<< HEAD
const User = db.define('task', {
  title: {
    		type: Sequelize.STRING,
    		allowNull: false
		 },
  email: {
    		type: Sequelize.STRING,
    		allowNull: false,
    		validate: {
            isEmail: true
        	}
		 },


});



module.exports = {
	db: db,
	Page:Page,
	User:User

}
=======
const User = db.define('user', {
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
          isEmail: true
        }
    }
});

module.exports = {
  db: db,
  Page: Page,
  User: User
};
>>>>>>> cd722e20336fb1cb7f4fea5ecfaf1e2da7faa199
