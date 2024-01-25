function checkNextButton() {
  var name = $("#sign-up-name").val();
  var email = $("#sign-up-email").val();
  var conditionsChecked = $("#sign-up-conditions:checked").length;
  var userType = $("#sign-up-customer").hasClass("selected") || $("#sign-up-performer").hasClass("selected");
  const regex = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  
  if(name.length > 1 && regex.test(email) && userType && conditionsChecked) {
    $("#sign-up-button-next").removeClass("inactive");
    return false;
  }
  
  $("#sign-up-button-next").addClass("inactive");
}

function checkCustomerSubmitButton() {
	
  var company = $("#customer-company-name").val();
  var goals = $("#customer-goals").val();
  var requestType = $("#customer-augment").hasClass("selected") || $("#customer-end-to-end").hasClass("selected");

  if(company.length > 2 && goals.length > 10 && requestType) {
    $("#sign-up-customer-submit").removeClass("inactive");
    return false;
  }
  
  $("#sign-up-customer-submit").addClass("inactive");
}

function checkPerformerSubmitButton() {
	
  var location = $("#performer-location").val();
  var rate = $("#performer-rate").val();
  var mainRole = $("#performer-main-role").parent().find('.selected-item').text() != "Select one";
  var topSkills = $("#performer-top-skills option:selected").length;

  console.log(location + " == " + rate + " == " + mainRole + " == " + topSkills);

  if(location.length > 5 && rate.length > 2 && mainRole && topSkills) {
    $("#sign-up-performer-submit").removeClass("inactive");
    return false;
  }
  
  $("#sign-up-performer-submit").addClass("inactive");
}

$(document).ready(function() {

  $('input[type=text], input[type=email], textarea').on('keyup', function (e) {
    checkNextButton();
    checkCustomerSubmitButton();
    checkPerformerSubmitButton();
  });
  $('input[type=checkbox]').on('change', function (e) {
    checkNextButton();
  }); 

  $('.select-button').on('click', function (e) {
    e.preventDefault();
    $(this).parent().find('.select-button').removeClass("selected");
    $(this).parent().find('.select-button input[type=checkbox]').removeAttr('checked');
    
    $(this).find("input[type=checkbox]").attr('checked', 'true');
    $(this).addClass("selected");
    
    checkNextButton();
    checkCustomerSubmitButton();
    checkPerformerSubmitButton();
  });
  
  $('#sign-up-button-next').on('click', function (e) {
  	e.preventDefault();
  	if($(this).hasClass('inactive')) return false;
    
    if($("#sign-up-customer").hasClass("selected")) {
    	$("#sign-up-customer-form").removeClass("hidden");
    }
    
    $("#sign-up-main-form").addClass("hidden");
    
    $('form[name=wf-form-Sign-Up-Form]').submit();
  });
  
  var customSelect = $(".custom-select");
	
  customSelect.each(function() {
	var thisCustomSelect = $(this),
        options = thisCustomSelect.find("option"),
        firstOptionText = options.first().text();
        
   	options = [
    	"Select one",
    	"Android Developer",
      "Art Director",
      "Automation Developer",
      "Back-End Developer",
      "Brand Designer",
      "Business Development",
      "Chief Technology Officer (CTO)",
      "Cloud Expert",
      "Content Writer",
      "Copywriter",
      "Data Analyst",
      "Data Architect",
      "Data Engineer",
      "Data Scientist",
      "Deep Learning Engineer",
      "DevOps Engineer",
      "Embedded Engineer",
      "Engineering Manager",
      "Front-End Developer",
      "Full-Stack Developer",
      "Game Designer",
      "Game Developer",
      "Graphics Designer",
      "Growth Marketer",
      "IT Consultant",
      "Industrial Designer",
      "ML Engineer",
      "MLOps",
      "Marketing Strategist",
      "Mobile Developer",
      "Motion Designer",
      "Online Marketing Expert",
      "Product Designer",
      "Product Manager",
      "Product Marketing Manager",
      "Product Owner",
      "Project Manager",
      "QA Engineer",
      "Risk & Compliance Consultant",
      "Security Expert",
      "Shopify Developer",
      "Software Architect",
      "Systems Engineer",
      "Systems Test Engineer",
      "UX Expert",
      "User Acquisition Manager",
      "WordPress Developer",
      "iOS Developer"
    ];

    var selectedItem = $("<div></div>", {
    	class: "selected-item"
    }).appendTo(thisCustomSelect).text(firstOptionText);

    var allItems = $("<div></div>", {
    	class: "all-items all-items-hide"
    }).appendTo(thisCustomSelect);

    options.forEach((elem) => {
    	var optionText = elem;

      var item = $("<div></div>", {
          class: "item",
          on: {
            click: function() {
              var selectedOptionText = elem;
              selectedItem.text(selectedOptionText).removeClass("arrowanim");
              allItems.addClass("all-items-hide");
            }
          }
      }).appendTo(allItems).text(optionText);
    });
  });

  var selectedItem = $(".selected-item"),
      allItems = $(".all-items");

  selectedItem.on("click", function(e) {
  	var currentSelectedItem = $(this),
        currentAllItems = currentSelectedItem.next(".all-items");

      	allItems.not(currentAllItems).addClass("all-items-hide");
      	selectedItem.not(currentSelectedItem).removeClass("arrowanim");

      	currentAllItems.toggleClass("all-items-hide");
      	currentSelectedItem.toggleClass("arrowanim");

      	e.stopPropagation();
  });

  $(document).on("click", function() {
  	console.log('doc click')
  	var opened = $(".all-items:not(.all-items-hide)"),
        index = opened.parent().index();

      	customSelect.eq(index).find(".all-items").addClass("all-items-hide");
      	customSelect.eq(index).find(".selected-item").removeClass("arrowanim");
  });
  
  $('#top-skills').multiselect();
  $("#top-skills").multiselect('loadOptions', [
  	{ name: '3D Engineering', value: '3D Engineering'},
    { name: '3D Modeling', value: '3D Modeling'},
    { name: 'Affiliate Marketing', value: 'Affiliate Marketing'},
    { name: 'Agile', value: 'Agile'},
    { name: 'Algorithm Design', value: 'Algorithm Design'},
    { name: 'Amazon Athena', value: 'Amazon Athena'},
    { name: 'Amplitude', value: 'Amplitude'},
    { name: 'Android', value: 'Android'},
    { name: 'Angular.js', value: 'Angular.js'},
    { name: 'Ansible', value: 'Ansible'},
    { name: 'Apex (Salesforce)', value: 'Apex (Salesforce)'},
    { name: 'APNS', value: 'APNS'},
    { name: 'Apollo', value: 'Apollo'},
    { name: 'App Clip (iOS)', value: 'App Clip (iOS)'},
    { name: 'ArangoDB', value: 'ArangoDB'},
    { name: 'ARM', value: 'ARM'},
    { name: 'Artifactory', value: 'Artifactory'},
    { name: 'Artificial Intelligence (AI)', value: 'Artificial Intelligence (AI)'},
    { name: 'ASP.NET', value: 'ASP.NET'},
    { name: 'Assembly', value: 'Assembly'},
    { name: 'Async.io', value: 'Async.io'},
    { name: 'Aurelia', value: 'Aurelia'},
    { name: 'Automated Testing', value: 'Automated Testing'},
    { name: 'AWS Aurora', value: 'AWS Aurora'},
    { name: 'AWS BETA', value: 'AWS BETA'},
    { name: 'AWS CDK', value: 'AWS CDK'},
    { name: 'AWS CloudFormation', value: 'AWS CloudFormation'},
    { name: 'AWS Lambda', value: 'AWS Lambda'},
    { name: 'AWS Neptune', value: 'AWS Neptune'},
    { name: 'AWS RDS', value: 'AWS RDS'},
    { name: 'Azure', value: 'Azure'},
    { name: 'Babylon.js', value: 'Babylon.js'},
    { name: 'Backbone.js', value: 'Backbone.js'},
    { name: 'Backlog Prioritization', value: 'Backlog Prioritization'},
    { name: 'BigQuery', value: 'BigQuery'},
    { name: 'BLE (Bluetooth)', value: 'BLE (Bluetooth)'},
    { name: 'Blockchain (Engineering)', value: 'Blockchain (Engineering)'},
    { name: 'Bloomreach', value: 'Bloomreach'},
    { name: 'Bootstrap JS', value: 'Bootstrap JS'},
    { name: 'Boto3', value: 'Boto3'},
    { name: 'Brand Strategy', value: 'Brand Strategy'},
    { name: 'C', value: 'C'},
    { name: 'C#', value: 'C#'},
    { name: 'C++', value: 'C++'},
    { name: 'Capacitor', value: 'Capacitor'},
    { name: 'Cassandra', value: 'Cassandra'},
    { name: 'CI/CD', value: 'CI/CD'},
    { name: 'CircleCl', value: 'CircleCl'},
    { name: 'Clojure', value: 'Clojure'},
    { name: 'Coffeescript', value: 'Coffeescript'},
    { name: 'Combine Framework (Swift)', value: 'Combine Framework (Swift)'},
    { name: 'Computer Vision', value: 'Computer Vision'},
    { name: 'Concurrent programming', value: 'Concurrent programming'},
    { name: 'Content Development', value: 'Content Development'},
    { name: 'Contentful', value: 'Contentful'},
    { name: 'Contently', value: 'Contently'},
    { name: 'Copywriting', value: 'Copywriting'},
    { name: 'Cordova', value: 'Cordova'},
    { name: 'Cryptography', value: 'Cryptography'},
    { name: 'CSS', value: 'CSS'},
    { name: 'CUDA', value: 'CUDA'},
    { name: 'Customer Acquisition', value: 'Customer Acquisition'},
    { name: 'Cypress', value: 'Cypress'},
    { name: 'D3.js', value: 'D3.js'},
    { name: 'DAO (engineering)', value: 'DAO (engineering)'},
    { name: 'Dart', value: 'Dart'},
    { name: 'Data Architecture', value: 'Data Architecture'},
    { name: 'Data Management', value: 'Data Management'},
    { name: 'Data Modeling', value: 'Data Modeling'},
    { name: 'Data Pipelines', value: 'Data Pipelines'},
    { name: 'Data Taxonomy', value: 'Data Taxonomy'},
    { name: 'Data Visualization', value: 'Data Visualization'},
    { name: 'Databricks', value: 'Databricks'},
    { name: 'DataDog', value: 'DataDog'},
    { name: 'Dax', value: 'Dax'},
    { name: 'Dax Studio', value: 'Dax Studio'},
    { name: 'Dbt', value: 'Dbt'},
    { name: 'Deep learning', value: 'Deep learning'},
    { name: 'Design Sprint', value: 'Design Sprint'},
    { name: 'Design Systems', value: 'Design Systems'},
    { name: 'DevOps', value: 'DevOps'},
    { name: 'Directus', value: 'Directus'},
    { name: 'Django', value: 'Django'},
    { name: 'DMX Protocol', value: 'DMX Protocol'},
    { name: 'Docker', value: 'Docker'},
    { name: 'DynamoDB', value: 'DynamoDB'},
    { name: 'ECR', value: 'ECR'},
    { name: 'EditorX', value: 'EditorX'},
    { name: 'EKS', value: 'EKS'},
    { name: 'Elastic Search', value: 'Elastic Search'},
    { name: 'Electron', value: 'Electron'},
    { name: 'Elementor', value: 'Elementor'},
    { name: 'Elixir', value: 'Elixir'},
    { name: 'ELK Stack', value: 'ELK Stack'},
    { name: 'Elm', value: 'Elm'},
    { name: 'Embedded Software', value: 'Embedded Software'},
    { name: 'Ember.js', value: 'Ember.js'},
    { name: 'Erlang', value: 'Erlang'},
    { name: 'ES6+', value: 'ES6+'},
    { name: 'Ethereum (engineering)', value: 'Ethereum (engineering)'},
    { name: 'Ethers.js', value: 'Ethers.js'},
    { name: 'ETL', value: 'ETL'},
    { name: 'Expo', value: 'Expo'},
    { name: 'Express.js', value: 'Express.js'},
    { name: 'F#', value: 'F#'},
    { name: 'FastAPI', value: 'FastAPI'},
    { name: 'Fast.ai', value: 'Fast.ai'},
    { name: 'FFMPEG', value: 'FFMPEG'},
    { name: 'Firebase', value: 'Firebase'},
    { name: 'Flask', value: 'Flask'},
    { name: 'Flink', value: 'Flink'},
    { name: 'Flutter', value: 'Flutter'},
    { name: 'Frida', value: 'Frida'},
    { name: 'Game Testing', value: 'Game Testing'},
    { name: 'Gatsby.js', value: 'Gatsby.js'},
    { name: 'Go', value: 'Go'},
    { name: 'GoCD', value: 'GoCD'},
    { name: 'Google Cloud / GCP', value: 'Google Cloud / GCP'},
    { name: 'GPS', value: 'GPS'},
    { name: 'GPT / OpenAI', value: 'GPT / OpenAI'},
    { name: 'Grafana', value: 'Grafana'},
    { name: 'Graphic Rendering', value: 'Graphic Rendering'},
    { name: 'GraphQL', value: 'GraphQL'},
    { name: 'Groovy', value: 'Groovy'},
    { name: 'GTM Planning', value: 'GTM Planning'},
    { name: 'Hadoop', value: 'Hadoop'},
    { name: 'Hardware Design', value: 'Hardware Design'},
    { name: 'Hasura', value: 'Hasura'},
    { name: 'HCI', value: 'HCI'},
    { name: 'Heroku', value: 'Heroku'},
    { name: 'HiveQL', value: 'HiveQL'},
    { name: 'Hotwire', value: 'Hotwire'},
    { name: 'HTML', value: 'HTML'},
    { name: 'IBM Sterling', value: 'IBM Sterling'},
    { name: 'InDesign', value: 'InDesign'},
    { name: 'Instant app (Android)', value: 'Instant app (Android)'},
    { name: 'Ionic', value: 'Ionic'},
    { name: 'iOS', value: 'iOS'},
    { name: 'iOS App Clips', value: 'iOS App Clips'},
    { name: 'JamStack', value: 'JamStack'},
    { name: 'Java', value: 'Java'},
    { name: 'JavaScript', value: 'JavaScript'},
    { name: 'Jenkins', value: 'Jenkins'},
    { name: 'JEST', value: 'JEST'},
    { name: 'Jetpack Compose', value: 'Jetpack Compose'},
    { name: 'jQuery', value: 'jQuery'},
    { name: 'Kafka', value: 'Kafka'},
    { name: 'Keras', value: 'Keras'},
    { name: 'Kinesis', value: 'Kinesis'},
    { name: 'Kotlin', value: 'Kotlin'},
    { name: 'Kubernetes', value: 'Kubernetes'},
    { name: 'LangChain', value: 'LangChain'},
    { name: 'Laravel', value: 'Laravel'},
    { name: 'LaunchDarkly', value: 'LaunchDarkly'},
    { name: 'LESS', value: 'LESS'},
    { name: 'Linux', value: 'Linux'},
    { name: 'Llama / Llama 2', value: 'Llama / Llama 2'},
    { name: 'Load Testing', value: 'Load Testing'},
    { name: 'Loader.io', value: 'Loader.io'},
    { name: 'Looker', value: 'Looker'},
    { name: 'Lua', value: 'Lua'},
    { name: 'Machine Learning', value: 'Machine Learning'},
    { name: 'Matlab', value: 'Matlab'},
    { name: 'Mediasoup', value: 'Mediasoup'},
    { name: 'Messagequeue', value: 'Messagequeue'},
    { name: 'Meteor.js', value: 'Meteor.js'},
    { name: 'Microservices', value: 'Microservices'},
    { name: 'Mobile Analytics', value: 'Mobile Analytics'},
    { name: 'Mobile Game Design', value: 'Mobile Game Design'},
    { name: 'MobX', value: 'MobX'},
    { name: 'MongoDB', value: 'MongoDB'},
    { name: 'Motion Design', value: 'Motion Design'},
    { name: 'Multi-Threading', value: 'Multi-Threading'},
    { name: 'MySQL', value: 'MySQL'},
    { name: 'Nest.js', value: 'Nest.js'},
    { name: '.NET', value: '.NET'},
    { name: 'Neural Networks', value: 'Neural Networks'},
    { name: 'NewRelic', value: 'NewRelic'},
    { name: 'Next.js', value: 'Next.js'},
    { name: 'NFT', value: 'NFT'},
    { name: 'NLP', value: 'NLP'},
    { name: 'Node.js', value: 'Node.js'},
    { name: 'Numpy', value: 'Numpy'},
    { name: 'Nuxt', value: 'Nuxt'},
    { name: 'Objective-C', value: 'Objective-C'},
    { name: 'Ocaml', value: 'Ocaml'},
    { name: 'Oracle Apex', value: 'Oracle Apex'},
    { name: 'Paid Ads', value: 'Paid Ads'},
    { name: 'Pandas', value: 'Pandas'},
    { name: 'Pascal', value: 'Pascal'},
    { name: 'Passport.js', value: 'Passport.js'},
    { name: 'Penetration Testing', value: 'Penetration Testing'},
    { name: 'Perl', value: 'Perl'},
    { name: 'Phoenix', value: 'Phoenix'},
    { name: 'Photoshop', value: 'Photoshop'},
    { name: 'PHP', value: 'PHP'},
    { name: 'Playwright', value: 'Playwright'},
    { name: 'Polygon', value: 'Polygon'},
    { name: 'PostCSS', value: 'PostCSS'},
    { name: 'PostgreSQL', value: 'PostgreSQL'},
    { name: 'Preact', value: 'Preact'},
    { name: 'Presentation Design', value: 'Presentation Design'},
    { name: 'Product Analytics', value: 'Product Analytics'},
    { name: 'Product Design', value: 'Product Design'},
    { name: 'Product Marketing', value: 'Product Marketing'},
    { name: 'Product Strategy', value: 'Product Strategy'},
    { name: 'Program Development Life Cycle (PDLC)', value: 'Program Development Life Cycle (PDLC)'},
    { name: 'Prometheus', value: 'Prometheus'},
    { name: 'Prototyping', value: 'Prototyping'},
    { name: 'Public Cloud', value: 'Public Cloud'},
    { name: 'PySpark', value: 'PySpark'},
    { name: 'PySQL', value: 'PySQL'},
    { name: 'Python', value: 'Python'},
    { name: 'PyTorch', value: 'PyTorch'},
    { name: 'QA (Quality Assurance)', value: 'QA (Quality Assurance)'},
    { name: 'R (language)', value: 'R (language)'},
    { name: 'RabbitMQ', value: 'RabbitMQ'},
    { name: 'React', value: 'React'},
    { name: 'React Flow', value: 'React Flow'},
    { name: 'React Native', value: 'React Native'},
    { name: 'RealmDB', value: 'RealmDB'},
    { name: 'Redis', value: 'Redis'},
    { name: 'Redshift', value: 'Redshift'},
    { name: 'Redux', value: 'Redux'},
    { name: 'RISC-V', value: 'RISC-V'},
    { name: 'Roadmapping', value: 'Roadmapping'},
    { name: 'Robotics', value: 'Robotics'},
    { name: 'Rollbar', value: 'Rollbar'},
    { name: 'Ruby on Rails', value: 'Ruby on Rails'},
    { name: 'Rudderstack', value: 'Rudderstack'},
    { name: 'Rust', value: 'Rust'},
    { name: 'Rx', value: 'Rx'},
    { name: 'RxJava', value: 'RxJava'},
    { name: 'Sails.js', value: 'Sails.js'},
    { name: 'SASS', value: 'SASS'},
    { name: 'Scala', value: 'Scala'},
    { name: 'scikit-learn', value: 'scikit-learn'},
    { name: 'SDLC', value: 'SDLC'},
    { name: 'Security (Engineering)', value: 'Security (Engineering)'},
    { name: 'Segment', value: 'Segment'},
    { name: 'Selenium', value: 'Selenium'},
    { name: 'SEM', value: 'SEM'},
    { name: 'Sentry', value: 'Sentry'},
    { name: 'SEO', value: 'SEO'},
    { name: 'Serverless', value: 'Serverless'},
    { name: 'ServiceNow', value: 'ServiceNow'},
    { name: 'Shopify', value: 'Shopify'},
    { name: 'Sketch', value: 'Sketch'},
    { name: 'Smart Contracts', value: 'Smart Contracts'},
    { name: 'Social Media Strategy', value: 'Social Media Strategy'},
    { name: 'Sockets', value: 'Sockets'},
    { name: 'Solidity', value: 'Solidity'},
    { name: 'Solid.js', value: 'Solid.js'},
    { name: 'Sound Processing', value: 'Sound Processing'},
    { name: 'Spark', value: 'Spark'},
    { name: 'Speech Deep Learning', value: 'Speech Deep Learning'},
    { name: 'Speech Recognition', value: 'Speech Recognition'},
    { name: 'Splunk', value: 'Splunk'},
    { name: 'Spring', value: 'Spring'},
    { name: 'Spring Boot', value: 'Spring Boot'},
    { name: 'SQL', value: 'SQL'},
    { name: 'Statistical functions', value: 'Statistical functions'},
    { name: 'Storybook', value: 'Storybook'},
    { name: 'Strapi', value: 'Strapi'},
    { name: 'Svelte', value: 'Svelte'},
    { name: 'Swift', value: 'Swift'},
    { name: 'SwiftUI', value: 'SwiftUI'},
    { name: 'Systems Architecture', value: 'Systems Architecture'},
    { name: 'Tailwind CSS', value: 'Tailwind CSS'},
    { name: 'Technical Writing and Documentation', value: 'Technical Writing and Documentation'},
    { name: 'Tensorflow', value: 'Tensorflow'},
    { name: 'Terraform', value: 'Terraform'},
    { name: 'Text-to-Speech', value: 'Text-to-Speech'},
    { name: 'Tornado', value: 'Tornado'},
    { name: 'Transactional UX', value: 'Transactional UX'},
    { name: 'Trigger Testing', value: 'Trigger Testing'},
    { name: 'Type-Orm', value: 'Type-Orm'},
    { name: 'TypeScript', value: 'TypeScript'},
    { name: 'Unbounce', value: 'Unbounce'},
    { name: 'Unity', value: 'Unity'},
    { name: 'Unreal Engine', value: 'Unreal Engine'},
    { name: 'User Research', value: 'User Research'},
    { name: 'UX Design', value: 'UX Design'},
    { name: 'UX/UI', value: 'UX/UI'},
    { name: 'VBA', value: 'VBA'},
    { name: 'Visual Basic', value: 'Visual Basic'},
    { name: 'Visual design', value: 'Visual design'},
    { name: 'Vue.js', value: 'Vue.js'},
    { name: 'Waterfall', value: 'Waterfall'},
    { name: 'Wearable Design', value: 'Wearable Design'},
    { name: 'Web Analytics', value: 'Web Analytics'},
    { name: 'Web3', value: 'Web3'},
    { name: 'WebFlow', value: 'WebFlow'},
    { name: 'WebGL', value: 'WebGL'},
    { name: 'Webhooks', value: 'Webhooks'},
    { name: 'Webpack', value: 'Webpack'},
    { name: 'WebRTC', value: 'WebRTC'},
    { name: 'Wireframing', value: 'Wireframing'},
    { name: 'WordPress', value: 'WordPress'},
    { name: 'x86', value: 'x86'},
    { name: 'Xamarin', value: 'Xamarin'},
    { name: 'Zeet.co', value: 'Zeet.co'},
    { name: 'ZeroMQ', value: 'ZeroMQ'},
    { name: 'Zod', value: 'Zod'}
  ]);
  $('#top-skills').multiselect('reload');
  
});
