const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

var skills = {

      "Tech": {
            "Android Developer": ["Agile", "Algorithm Design", "Automated Testing", "Dagger 2", "Firebase services", "Java", "Jetpack Components", "Kotlin", "MVVM", "OkHttp", "Retrofit", "SQLite", "UI testing (Espresso)", "Unit testing (JUnit)"],
            "Automation Developer": [".NET", "Agile", "Algorithm Design", "Amazon Athena", "Amazon Redshift", "Ansible", "ArangoDB", "Artifactory", "Async.io", "Aurelia", "Automated Testing", "Boto3", "CI/CD", "CircleCI", "Cryptography", "Cypress", "DataDog", "DynamoDB", "Erlang", "Ethers.js", "Express.js", "F#", "Firebase", "Flink", "Go", "GoCD", "Google Cloud / GCP", "Grafana", "GraphQL", "Groovy", "Hadoop", "Hasura", "Heroku", "HiveQL", "Jenkins", "JEST", "Keras", "Kinesis", "LangChain", "Laravel", "LaunchDarkly", "Llama / Llama 2", "Mediasoup", "Meteor.js", "Microservices", "MongoDB", "Multi-Threading", "MySQL", "Nest.js", "Next.js", "Numpy", "Pandas", "Passport.js", "Perl", "PHP", "Playwright", "PySQL", "PyTorch", "Rollbar", "Rust", "RxJava", "Sails.js", "Scikit-learn", "Selenium", "Sentry", "ServiceNow", "Shopify", "Sockets", "Solidity", "Sound Processing", "Spark", "Speech Recognition", "Strapi", "Tensorflow", "Text-to-Speech", "Tornado", "WebRTC", "WordPress", "ZeroMQ"],
            "Back-End Developer": [".NET", "Agile", "Algorithm Design", "Amazon Athena", "Amazon ECR", "Amazon Redshift", "Angular.js", "Ansible", "ArangoDB", "Artifactory", "ASP.NET", "Assembly", "Async.io", "Aurelia", "Automated Testing", "AWS Aurora", "AWS BETA", "AWS CDK", "AWS CloudFormation", "AWS Lambda", "AWS Neptune", "AWS RDS", "Azure Functions", "BigQuery", "Boto3", "C", "C#", "C++", "Cassandra", "CI/CD", "CircleCI", "Clojure", "Coffeescript", "Computer Vision", "Cryptography", "Dart", "Data Architecture", "Data Management", "Data Modeling", "Data Pipelines", "Data Taxonomy", "Databricks", "Django", "DynamoDB", "Elastic Search", "Elixir", "Erlang", "Ethers.js", "Express.js", "F#", "FastAPI", "Firebase", "Flask", "Flink", "Go", "GoCD", "Google Cloud / GCP", "Grafana", "GraphQL", "Groovy", "Hadoop", "Hasura", "Heroku", "HiveQL", "Java", "JavaScript", "JEST", "Kafka", "Keras", "Kinesis", "Kotlin", "Kubernetes", "LangChain", "Laravel", "LaunchDarkly", "Llama / Llama 2", "Mediasoup", "Meteor.js", "Microservices", "MongoDB", "Multi-Threading", "MySQL", "Nest.js", "Next.js", "Node.js", "Numpy", "Pandas", "Passport.js", "Perl", "PHP", "PostgreSQL", "Prometheus", "PySpark", "PySQL", "Python", "PyTorch", "RabbitMQ", "Redis", "Rollbar", "Ruby on Rails", "Rust", "RxJava", "Sails.js", "Scala", "Scikit-learn", "Sentry", "Shopify", "Sockets", "Solidity", "Sound Processing", "Spark", "Speech Recognition", "Spring", "Spring Boot", "SQL", "Strapi", "Tensorflow", "Terraform", "Text-to-Speech", "Tornado", "Type-Orm", "TypeScript", "WebRTC", "WordPress", "ZeroMQ"],
            "Chief Technology Officer (CTO)": [".NET", "Agile", "Algorithm Design", "Amazon Athena", "Amazon ECR", "Amazon EKS", "Amazon Redshift", "Angular.js", "Ansible", "APNS", "App Clip", "ArangoDB", "Artifactory", "ASP.NET", "Assembly", "Async.io", "Aurelia", "Automated Testing", "AWS Aurora", "AWS BETA", "AWS CDK", "AWS CloudFormation", "AWS Lambda", "AWS Neptune", "AWS RDS", "Azure Functions", "BigQuery", "Bootstrap JS", "Boto3", "C", "C#", "C++", "Capacitor", "Cassandra", "CI/CD", "CircleCI", "Clojure", "Coffeescript", "Computer Vision", "Cryptography", "CUDA", "Cypress", "Dart", "Data Architecture", "Data Management", "Data Modeling", "Data Pipelines", "Data Taxonomy", "Databricks", "DataDog", "Directus", "Django", "Docker", "DynamoDB", "Elastic Search", "Elixir", "Elm", "Ember.js", "Erlang", "ES6+", "Ethers.js", "Expo", "Express.js", "F#", "Fast.ai", "FastAPI", "Firebase", "Flask", "Flink", "Gatsby.js", "Go", "GoCD", "Google Cloud / GCP", "Grafana", "GraphQL", "Groovy", "Hadoop", "Hasura", "Heroku", "HiveQL", "JamStack", "Java", "JavaScript", "JEST", "jQuery", "Kafka", "Keras", "Kinesis", "Kotlin", "Kubernetes", "LangChain", "Laravel", "LaunchDarkly", "LESS", "Llama / Llama 2", "Looker", "Mediasoup", "Meteor.js", "Microservices", "MobX", "MongoDB", "Multi-Threading", "MySQL", "Nest.js", "Next.js", "NLP", "Node.js", "Numpy", "Nuxt", "Pandas", "Passport.js", "Perl", "PHP", "PostCSS", "PostgreSQL", "Preact", "Prometheus", "PySpark", "PySQL", "Python", "PyTorch", "R", "RabbitMQ", "React Flow", "Readymag", "Redis", "Redux", "Roadmapping", "Rollbar", "Ruby on Rails", "Rust", "RxJava", "Sails.js", "SASS", "Scala", "Scikit-learn", "Sentry", "Shopify", "Sockets", "Solid.js", "Solidity", "Sound Processing", "Spark", "Speech Deep Learning", "Speech Recognition", "Splunk", "Spring", "Spring Boot", "SQL", "Storybook", "Strapi", "Svelte", "Tailwind CSS", "Technical Writing and Documentation", "Tensorflow", "Terraform", "Text-to-Speech", "Tornado", "Type-Orm", "TypeScript", "Vue.js", "Waterfall", "Webflow", "WebGL", "Webpack", "WebRTC", "WordPress", "Zeet.co", "ZeroMQ", "Zod"],
            "Cloud Expert": [".NET", "Agile", "Algorithm Design", "Amazon Athena", "Amazon ECR", "Amazon EKS", "Amazon Redshift", "Ansible", "ArangoDB", "Artifactory", "ASP.NET", "Automated Testing", "AWS Aurora", "AWS BETA", "AWS CDK", "AWS CloudFormation", "AWS Lambda", "AWS Neptune", "AWS RDS", "Azure", "BigQuery", "Boto3", "CI/CD", "CircleCI", "CUDA", "Data Architecture", "Databricks", "DataDog", "Docker", "DynamoDB", "Fast.ai", "Flink", "GoCD", "Google Cloud / GCP", "Grafana", "GraphQL", "Hadoop", "Hasura", "Heroku", "HiveQL", "Keras", "Kinesis", "LangChain", "Llama / Llama 2", "Looker", "Microservices", "MongoDB", "Multi-Threading", "MySQL", "Next.js", "NLP", "Numpy", "Pandas", "Prometheus", "PySQL", "R", "Rollbar", "Scikit-learn", "Sentry", "Sockets", "Sound Processing", "Spark", "Speech Deep Learning", "Speech Recognition", "Tensorflow", "Terraform", "Text-to-Speech", "Webpack", "Zeet.co", "ZeroMQ"],
            "DevOps Engineer": [".NET", "Agile", "Algorithm Design", "Amazon Athena", "Amazon ECR", "Amazon EKS", "Amazon Redshift", "Ansible", "ArangoDB", "Artifactory", "ASP.NET", "Async.io", "Aurelia", "Automated Testing", "AWS Aurora", "AWS BETA", "AWS CDK", "AWS CloudFormation", "AWS Lambda", "AWS Neptune", "AWS RDS", "Azure", "BigQuery", "Boto3", "Cassandra", "CI/CD", "CircleCI", "CUDA", "Data Architecture", "Databricks", "DataDog", "Docker", "DynamoDB", "Flink", "GoCD", "Google Cloud / GCP", "Grafana", "Hadoop", "Hasura", "Heroku", "HiveQL", "Jenkins", "Kinesis", "Kubernetes", "Microservices", "MongoDB", "Multi-Threading", "MySQL", "Next.js", "Prometheus", "Rollbar", "Sentry", "Spark", "Tensorflow", "Terraform", "Webpack", "Zeet.co", "ZeroMQ"],
            "Engineering Manager": [".NET", "Agile", "Algorithm Design", "Amazon Athena", "Amazon ECR", "Amazon Redshift", "Angular.js", "Ansible", "APNS", "App Clip", "ArangoDB", "Artifactory", "ASP.NET", "Assembly", "Async.io", "Aurelia", "Automated Testing", "AWS Aurora", "AWS BETA", "AWS CDK", "AWS CloudFormation", "AWS Lambda", "AWS Neptune", "AWS RDS", "Azure", "BigQuery", "Bootstrap JS", "Boto3", "C", "C#", "C++", "Capacitor", "Cassandra", "CI/CD", "CircleCI", "Clojure", "Computer Vision", "Cryptography", "CUDA", "Cypress", "Dart", "Data Architecture", "Databricks", "Directus", "Docker", "DynamoDB", "Elixir", "Elm", "Ember.js", "Erlang", "ES6+", "Ethers.js", "Expo", "Express.js", "F#", "Fast.ai", "Firebase", "Flink", "Gatsby.js", "Go", "GoCD", "Google Cloud / GCP", "Grafana", "GraphQL", "Groovy", "Hadoop", "Hasura", "Heroku", "HiveQL", "JamStack", "JEST", "jQuery", "Keras", "Kinesis", "LangChain", "Laravel", "LaunchDarkly", "LESS", "Llama / Llama 2", "Looker", "Mediasoup", "Meteor.js", "Microservices", "MobX", "MongoDB", "Multi-Threading", "MySQL", "Nest.js", "Next.js", "NLP", "Numpy", "Nuxt", "Pandas", "Passport.js", "Perl", "PHP", "PostCSS", "Preact", "Program Development Life Cycle (PDLC)", "Prometheus", "PySQL", "PyTorch", "R", "React Flow", "Readymag", "Redux", "Roadmapping", "Rollbar", "Rust", "RxJava", "Sails.js", "SASS", "Scikit-learn", "SDLC", "Sentry", "Shopify", "Sockets", "Solid.js", "Solidity", "Sound Processing", "Spark", "Speech Deep Learning", "Speech Recognition", "Storybook", "Strapi", "Svelte", "Tailwind CSS", "Technical Writing and Documentation", "Tensorflow", "Terraform", "Text-to-Speech", "Tornado", "Vue.js", "Waterfall", "Webflow", "WebGL", "Webpack", "WebRTC", "Wireframing", "WordPress", "Zeet.co", "ZeroMQ", "Zod"],
            "Embedded Software Engineer": ["Agile", "Algorithm Design", "Assembly", "Automated Testing", "Bare Metal", "BLE (Bluetooth)", "C", "C++", "Cryptography", "DMX Protocol", "Embedded C", "Linux Embedded", "QT", "RISC-V", "RTOS", "Verilog", "VHDL"],
            "Front-End Developer": ["Agile", "Algorithm Design", "Angular.js", "Ansible", "ASP.NET", "Aurelia", "Automated Testing", "Babylon.js", "Backbone.js", "Bootstrap JS", "Capacitor", "Coffeescript", "D3.js", "Directus", "Electron", "Elm", "Ember.js", "ES6+", "Firebase", "Gatsby.js", "GraphQL", "JamStack", "JEST", "jQuery", "LESS", "Meteor.js", "MobX", "Next.js", "Nuxt", "PostCSS", "Preact", "React Flow", "React.js", "Readymag", "Redux", "Rollbar", "Sails.js", "SASS", "Sentry", "Sockets", "Solid.js", "Storybook", "Svelte", "Tailwind CSS", "TypeScript", "Vue.js", "Webflow", "WebGL", "Webpack", "WebRTC", "WordPress", "Zod"],
            "Full-Stack Developer": [".NET", "Agile", "Algorithm Design", "Amazon Athena", "Amazon ECR", "Amazon Redshift", "Angular.js", "Ansible", "ArangoDB", "Artifactory", "ASP.NET", "Assembly", "Async.io", "Aurelia", "Automated Testing", "AWS Aurora", "AWS BETA", "AWS CDK", "AWS CloudFormation", "AWS Lambda", "AWS Neptune", "AWS RDS", "Babylon.js", "Backbone.js", "BigQuery", "Bootstrap JS", "Boto3", "C", "C#", "C++", "Capacitor", "Cassandra", "CI/CD", "CircleCI", "Clojure", "Coffeescript", "Computer Vision", "Cryptography", "D3.js", "Dart", "Data Architecture", "Data Management", "Data Modeling", "Data Pipelines", "Data Taxonomy", "Databricks", "Directus", "Django", "DynamoDB", "Elastic Search", "Electron", "Elixir", "Elm", "Ember.js", "Erlang", "ES6+", "Ethers.js", "Express.js", "F#", "FastAPI", "Firebase", "Flask", "Flink", "Gatsby.js", "Go", "GoCD", "Google Cloud / GCP", "Grafana", "GraphQL", "Groovy", "Hadoop", "Hasura", "Heroku", "HiveQL", "JamStack", "JavaScript", "JEST", "jQuery", "Keras", "Kinesis", "LangChain", "Laravel", "LaunchDarkly", "LESS", "Llama / Llama 2", "Mediasoup", "Meteor.js", "Microservices", "MobX", "MongoDB", "Multi-Threading", "MySQL", "Nest.js", "Next.js", "Node.js", "Numpy", "Nuxt", "Pandas", "Passport.js", "Perl", "PHP", "PostCSS", "PostgreSQL", "Preact", "PySpark", "PySQL", "Python", "PyTorch", "React Flow", "React.js", "Readymag", "Redux", "Rollbar", "Ruby on Rails", "Rust", "RxJava", "Sails.js", "SASS", "Scala", "Scikit-learn", "Sentry", "Shopify", "Sockets", "Solid.js", "Solidity", "Sound Processing", "Spark", "Speech Recognition", "Spring", "Spring Boot", "SQL", "Storybook", "Strapi", "Svelte", "Tailwind CSS", "Tensorflow", "Text-to-Speech", "Tornado", "Type-Orm", "TypeScript", "Vue.js", "Webflow", "WebGL", "Webpack", "WebRTC", "WordPress", "ZeroMQ", "Zod"],
            "iOS Developer": ["Agile", "Algorithm Design", "APNS", "App Clip", "Automated Testing", "Combine Framework", "iOS App Clips", "Objective-C", "Swift", "SwiftUI"],
            "Mobile Developer": ["Agile", "Algorithm Design", "APNS", "App Clip", "Aurelia", "Automated Testing", "Capacitor", "Cordova", "D3.js", "Dart", "Expo", "Flutter", "Ionic", "iOS App Clips", "React Native", "RealmDB", "Xamarin"],
            "IT Consultant": [".NET", "Agile", "Algorithm Design", "Amazon Athena", "Amazon ECR", "Amazon Redshift", "Angular.js", "Ansible", "APNS", "App Clip", "ArangoDB", "Artifactory", "ASP.NET", "Assembly", "Async.io", "Aurelia", "Automated Testing", "AWS Aurora", "AWS BETA", "AWS CDK", "AWS CloudFormation", "AWS Lambda", "AWS Neptune", "AWS RDS", "Azure", "BigQuery", "Capacitor", "Cassandra", "CI/CD", "CircleCI", "Computer Vision", "Cryptography", "CUDA", "Cypress", "Data Architecture", "Databricks", "DataDog", "Django", "Docker", "Elastic Search", "Elixir", "Ember.js", "Erlang", "ES6+", "Ethers.js", "Expo", "Express.js", "F#", "Fast.ai", "FastAPI", "Firebase", "Flask", "Flink", "Gatsby.js", "Go", "GoCD", "Google Cloud / GCP", "Grafana", "GraphQL", "Groovy", "Hadoop", "Hasura", "Heroku", "HiveQL", "JamStack", "Java", "JavaScript", "JEST", "jQuery", "Kafka", "Keras", "Kinesis", "Kotlin", "Kubernetes", "LangChain", "Laravel", "LaunchDarkly", "LESS", "Llama / Llama 2", "Looker", "Mediasoup", "Meteor.js", "Microservices", "MobX", "MongoDB", "Multi-Threading", "MySQL", "Nest.js", "Next.js", "NLP", "Node.js", "Numpy", "Nuxt", "Pandas", "Passport.js", "Perl", "PHP", "PostCSS", "PostgreSQL", "Preact", "Prometheus", "PySpark", "PySQL", "Python", "PyTorch", "R", "RabbitMQ", "React Flow", "Readymag", "Redis", "Redux", "Roadmapping", "Rollbar", "Ruby on Rails", "Rust", "RxJava", "Sails.js", "SASS", "Scala", "Scikit-learn", "Sentry", "Shopify", "Sockets", "Solid.js", "Solidity", "Sound Processing", "Spark", "Speech Deep Learning", "Speech Recognition", "Splunk", "Spring", "Spring Boot", "SQL", "Storybook", "Strapi", "Svelte", "Systems Architecture", "Tailwind CSS", "Technical Writing and Documentation", "Tensorflow", "Terraform", "Text-to-Speech", "Tornado", "Type-Orm", "TypeScript", "Vue.js", "Webflow", "WebGL", "Webpack", "WebRTC", "Wireframing", "WordPress", "Zeet.co", "ZeroMQ", "Zod"],
            "Project Manager": ["Agile", "Amplitude", "Automated Testing", "Backlog Prioritization", "Program Development Life Cycle (PDLC)", "Roadmapping", "Technical Writing and Documentation", "Waterfall", "Wireframing"],
            "Security Expert": ["Agile", "Algorithm Design", "Amazon Athena", "Automated Testing", "Cryptography", "Penetration Testing", "Splunk", "Technical Writing and Documentation"],
            "Software Architect": [".NET", "Agile", "Algorithm Design", "Amazon Athena", "Amazon ECR", "Amazon EKS", "Amazon Redshift", "Angular.js", "Ansible", "APNS", "App Clip", "ArangoDB", "Artifactory", "ASP.NET", "Assembly", "Async.io", "Aurelia", "Automated Testing", "AWS Aurora", "AWS BETA", "AWS CDK", "AWS CloudFormation", "AWS Lambda", "AWS Neptune", "AWS RDS", "Azure", "BigQuery", "Boto3", "C#", "Capacitor", "Cassandra", "CI/CD", "CircleCI", "Clojure", "Computer Vision", "Cryptography", "CUDA", "Data Architecture", "Databricks", "DataDog", "Directus", "Django", "Docker", "DynamoDB", "Elastic Search", "Electron", "Elixir", "Elm", "Ember.js", "Erlang", "ES6+", "Ethers.js", "Expo", "Express.js", "F#", "Fast.ai", "FastAPI", "Firebase", "Flask", "Flink", "Gatsby.js", "Go", "GoCD", "Google Cloud / GCP", "Grafana", "GraphQL", "Groovy", "Hadoop", "Hasura", "Heroku", "HiveQL", "JamStack", "Java", "JavaScript", "JEST", "jQuery", "Kafka", "Keras", "Kinesis", "Kotlin", "Kubernetes", "LangChain", "Laravel", "LaunchDarkly", "LESS", "Llama / Llama 2", "Looker", "Mediasoup", "Meteor.js", "Microservices", "MobX", "MongoDB", "Multi-Threading", "MySQL", "Nest.js", "Next.js", "NLP", "Node.js", "Numpy", "Nuxt", "Pandas", "Passport.js", "Perl", "PHP", "PostCSS", "PostgreSQL", "Preact", "Prometheus", "PySpark", "PySQL", "Python", "PyTorch", "R", "RabbitMQ", "React Flow", "Readymag", "Redis", "Redux", "Rollbar", "Ruby on Rails", "Rust", "RxJava", "Sails.js", "SASS", "Scala", "Scikit-learn", "Sentry", "Shopify", "Sockets", "Solid.js", "Solidity", "Sound Processing", "Spark", "Speech Deep Learning", "Speech Recognition", "Spring", "Spring Boot", "SQL", "Storybook", "Strapi", "Svelte", "Systems Architecture", "Tailwind CSS", "Technical Writing and Documentation", "Tensorflow", "Terraform", "Text-to-Speech", "Tornado", "Type-Orm", "TypeScript", "Vue.js", "Webflow", "WebGL", "Webpack", "WebRTC", "Wireframing", "WordPress", "Zeet.co", "ZeroMQ", "Zod"],
            "Systems Engineer": [".NET", "Agile", "Algorithm Design", "Amazon Athena", "Amazon ECR", "Amazon EKS", "Amazon Redshift", "Ansible", "ArangoDB", "Artifactory", "ASP.NET", "Assembly", "Async.io", "Aurelia", "Automated Testing", "AWS Aurora", "AWS BETA", "AWS CDK", "AWS CloudFormation", "AWS Lambda", "AWS Neptune", "AWS RDS", "Azure", "BigQuery", "Boto3", "C", "C#", "C++", "Cassandra", "CI/CD", "CircleCI", "Clojure", "Computer Vision", "Cryptography", "CUDA", "Databricks", "DataDog", "Directus", "Django", "Docker", "DynamoDB", "Elastic Search", "Electron", "Elixir", "Elm", "Ember.js", "Erlang", "ES6+", "Ethers.js", "Express.js", "F#", "FastAPI", "Firebase", "Flask", "Flink", "Gatsby.js", "Go", "GoCD", "Google Cloud / GCP", "Grafana", "GraphQL", "Groovy", "Hadoop", "Hasura", "Heroku", "HiveQL", "JamStack", "Java", "JavaScript", "JEST", "jQuery", "Kafka", "Keras", "Kinesis", "Kotlin", "Kubernetes", "LangChain", "Laravel", "LaunchDarkly", "LESS", "Llama / Llama 2", "Mediasoup", "Meteor.js", "Microservices", "MobX", "MongoDB", "Multi-Threading", "MySQL", "Nest.js", "Next.js", "Node.js", "Numpy", "Nuxt", "Pandas", "Passport.js", "Perl", "PHP", "PostCSS", "PostgreSQL", "Preact", "Prometheus", "PySpark", "PySQL", "Python", "PyTorch", "RabbitMQ", "React Flow", "Readymag", "Redis", "Redux", "Rollbar", "Ruby on Rails", "Rust", "RxJava", "Sails.js", "SASS", "Scala", "Scikit-learn", "Sentry", "Shopify", "Sockets", "Solid.js", "Solidity", "Sound Processing", "Spark", "Speech Recognition", "Spring", "Spring Boot", "SQL", "Storybook", "Strapi", "Svelte", "Systems Architecture", "Tailwind CSS", "Tensorflow", "Text-to-Speech", "Tornado", "Type-Orm", "TypeScript", "Vue.js", "Webflow", "WebGL", "Webpack", "WebRTC", "WordPress", "ZeroMQ", "Zod"],
            "Systems Test Engineer": ["Agile", "Algorithm Design", "Ansible", "ArangoDB", "Artifactory", "ASP.NET", "Assembly", "Async.io", "Aurelia", "Automated Testing", "Cypress", "Load Testing", "Loader.io", "Penetration Testing", "Selenium"],
            "QA Engineer": ["Agile", "Algorithm Design", "Angular.js", "Ansible", "ASP.NET", "Async.io", "Aurelia", "Automated Testing", "Cypress", "Load Testing", "Loader.io", "Penetration Testing", "Selenium"],
      },
      "Data & AI": {
            "Data Analyst": ["Agile", "Algorithm Design", "Amazon Athena", "Amazon Redshift", "ArangoDB", "Artifactory", "ASP.NET", "Async.io", "AWS Aurora", "AWS BETA", "AWS CDK", "AWS CloudFormation", "AWS Lambda", "AWS Neptune", "AWS RDS", "Azure", "BigQuery", "Boto3", "Cassandra", "Data Architecture", "Data Management", "Data Modeling", "Data Pipelines", "Data Taxonomy", "Databricks", "Fast.ai", "Google Cloud / GCP", "Grafana", "GraphQL", "Hadoop", "Hasura", "Heroku", "HiveQL", "Keras", "Kinesis", "LangChain", "Llama / Llama 2", "Looker", "MongoDB", "Multi-Threading", "NLP", "Numpy", "Pandas", "PySQL", "R", "Scikit-learn", "Sockets", "Sound Processing", "Spark", "Speech Deep Learning", "Speech Recognition", "Tensorflow", "Text-to-Speech", "ZeroMQ"],
            "Data Architect": [".NET", "Agile", "Algorithm Design", "Amazon Athena", "Amazon ECR", "Amazon Redshift", "Ansible", "ArangoDB", "Artifactory", "ASP.NET", "Async.io", "Automated Testing", "AWS Aurora", "AWS BETA", "AWS CDK", "AWS CloudFormation", "AWS Lambda", "AWS Neptune", "AWS RDS", "Azure", "BigQuery", "Boto3", "Cassandra", "CUDA", "Data Architecture", "Data Management", "Data Modeling", "Data Pipelines", "Data Taxonomy", "Databricks", "DataDog", "Docker", "DynamoDB", "Erlang", "Ethers.js", "Express.js", "F#", "Fast.ai", "Firebase", "Flink", "Go", "GoCD", "Google Cloud / GCP", "Grafana", "GraphQL", "Groovy", "Hadoop", "Hasura", "Heroku", "HiveQL", "JEST", "Keras", "Kinesis", "LangChain", "Laravel", "LaunchDarkly", "Llama / Llama 2", "Looker", "Mediasoup", "Meteor.js", "Microservices", "MongoDB", "Multi-Threading", "MySQL", "Nest.js", "Next.js", "NLP", "Numpy", "Pandas", "Passport.js", "Perl", "PHP", "Prometheus", "PySQL", "PyTorch", "R", "Roadmapping", "Rollbar", "Rust", "RxJava", "Sails.js", "Scikit-learn", "Sentry", "Shopify", "Sockets", "Solidity", "Sound Processing", "Spark", "Speech Deep Learning", "Speech Recognition", "Strapi", "Tensorflow", "Text-to-Speech", "Tornado", "Webpack", "WebRTC", "WordPress", "Zeet.co", "ZeroMQ"],
            "Data Engineer": [".NET", "Agile", "Algorithm Design", "Amazon Athena", "Amazon ECR", "Amazon Redshift", "Ansible", "ArangoDB", "Artifactory", "ASP.NET", "Async.io", "Automated Testing", "AWS Aurora", "AWS BETA", "AWS CDK", "AWS CloudFormation", "AWS Lambda", "AWS Neptune", "AWS RDS", "Azure", "BigQuery", "Boto3", "Cassandra", "CUDA", "Data Architecture", "Data Management", "Data Modeling", "Data Pipelines", "Data Taxonomy", "Databricks", "DataDog", "Docker", "DynamoDB", "Erlang", "Ethers.js", "Express.js", "F#", "Fast.ai", "Firebase", "Flink", "Go", "GoCD", "Google Cloud / GCP", "Grafana", "GraphQL", "Groovy", "Hadoop", "Hasura", "Heroku", "HiveQL", "JEST", "Keras", "Kinesis", "LangChain", "Laravel", "LaunchDarkly", "Llama / Llama 2", "Looker", "Mediasoup", "Meteor.js", "Microservices", "MongoDB", "Multi-Threading", "MySQL", "Nest.js", "Next.js", "NLP", "Numpy", "Pandas", "Passport.js", "Perl", "PHP", "PySpark", "PySQL", "PyTorch", "R", "Rollbar", "Rust", "RxJava", "Sails.js", "Scikit-learn", "Sentry", "Shopify", "Sockets", "Solidity", "Sound Processing", "Spark", "Speech Deep Learning", "Speech Recognition", "Strapi", "Tensorflow", "Text-to-Speech", "Tornado", "WebRTC", "WordPress", "ZeroMQ"],
            "Data Scientist": ["Agile", "Algorithm Design", "Amazon Athena", "Amazon ECR", "Amazon Redshift", "ArangoDB", "Artifactory", "ASP.NET", "Async.io", "AWS Aurora", "AWS BETA", "AWS CDK", "AWS CloudFormation", "AWS Lambda", "AWS Neptune", "AWS RDS", "Azure", "BigQuery", "Boto3", "Cassandra", "Data Architecture", "Data Management", "Data Modeling", "Data Pipelines", "Data Taxonomy", "Databricks", "Deep Learning", "Fast.ai", "Google Cloud / GCP", "Grafana", "GraphQL", "Hadoop", "Hasura", "Heroku", "HiveQL", "Keras", "Kinesis", "LangChain", "Llama / Llama 2", "Looker", "MongoDB", "Multi-Threading", "Neural Networks", "NLP", "Numpy", "Pandas", "PySpark", "PySQL", "PyTorch", "R", "Scikit-learn", "Sockets", "Sound Processing", "Spark", "Speech Deep Learning", "Speech Recognition", "TensorFlow", "Tensorflow", "Text-to-Speech", "ZeroMQ"],
            "Deep Learning Engineer": [".NET", "Agile", "Algorithm Design", "Amazon Athena", "Amazon ECR", "Amazon Redshift", "Ansible", "ArangoDB", "Artifactory", "ASP.NET", "Async.io", "Automated Testing", "AWS Aurora", "AWS BETA", "AWS CDK", "AWS CloudFormation", "AWS Lambda", "AWS Neptune", "AWS RDS", "Azure", "BigQuery", "Boto3", "Cassandra", "Computer Vision", "CUDA", "Databricks", "Deep Learning", "Docker", "DynamoDB", "Erlang", "Ethers.js", "Express.js", "F#", "Fast.ai", "Firebase", "Flink", "Go", "GoCD", "Google Cloud / GCP", "Grafana", "GraphQL", "Groovy", "Hadoop", "Hasura", "Heroku", "HiveQL", "JEST", "Keras", "Kinesis", "LangChain", "Laravel", "LaunchDarkly", "Llama / Llama 2", "Looker", "Mediasoup", "Meteor.js", "Microservices", "MongoDB", "Multi-Threading", "MySQL", "Nest.js", "Neural Networks", "Next.js", "NLP", "Numpy", "Pandas", "Passport.js", "Perl", "PHP", "PySQL", "PyTorch", "R", "Rollbar", "Rust", "RxJava", "Sails.js", "Scikit-learn", "Sentry", "Shopify", "Sockets", "Solidity", "Sound Processing", "Spark", "Speech Deep Learning", "Speech Recognition", "Strapi", "TensorFlow", "Tensorflow", "Text-to-Speech", "Tornado", "WebRTC", "WordPress", "ZeroMQ"],
            "ML Engineer": [".NET", "Agile", "Algorithm Design", "Amazon Athena", "Amazon ECR", "Amazon Redshift", "Ansible", "ArangoDB", "Artifactory", "ASP.NET", "Async.io", "Automated Testing", "AWS Aurora", "AWS BETA", "AWS CDK", "AWS CloudFormation", "AWS Lambda", "AWS Neptune", "AWS RDS", "Azure", "BigQuery", "Boto3", "Cassandra", "Computer Vision", "CUDA", "Databricks", "Deep Learning", "Docker", "DynamoDB", "Erlang", "Ethers.js", "Express.js", "F#", "Fast.ai", "Firebase", "Flink", "Go", "GoCD", "Google Cloud / GCP", "Grafana", "GraphQL", "Groovy", "Hadoop", "Hasura", "Heroku", "HiveQL", "JEST", "Keras", "Kinesis", "LangChain", "Laravel", "LaunchDarkly", "Llama / Llama 2", "Looker", "Mediasoup", "Meteor.js", "Microservices", "MongoDB", "Multi-Threading", "MySQL", "Nest.js", "Neural Networks", "Next.js", "NLP", "Numpy", "Pandas", "Passport.js", "Perl", "PHP", "PySQL", "PyTorch", "R", "Rollbar", "Rust", "RxJava", "Sails.js", "Scikit-learn", "Sentry", "Shopify", "Sockets", "Solidity", "Sound Processing", "Spark", "Speech Deep Learning", "Speech Recognition", "Strapi", "TensorFlow", "Tensorflow", "Text-to-Speech", "Tornado", "WebRTC", "WordPress", "ZeroMQ"],
            "MLOps": [".NET", "Agile", "Algorithm Design", "Amazon Athena", "Amazon ECR", "Amazon EKS", "Amazon Redshift", "Ansible", "ArangoDB", "Artifactory", "ASP.NET", "Async.io", "Automated Testing", "AWS Aurora", "AWS BETA", "AWS CDK", "AWS CloudFormation", "AWS Lambda", "AWS Neptune", "AWS RDS", "Azure", "BigQuery", "Boto3", "Cassandra", "CI/CD", "CircleCI", "Computer Vision", "CUDA", "Databricks", "DataDog", "Docker", "DynamoDB", "Fast.ai", "Flink", "GoCD", "Google Cloud / GCP", "Grafana", "GraphQL", "Hadoop", "Hasura", "Heroku", "HiveQL", "Keras", "Kinesis", "LangChain", "Llama / Llama 2", "Looker", "Microservices", "MongoDB", "Multi-Threading", "MySQL", "Neural Networks", "Next.js", "NLP", "Numpy", "Pandas", "Prometheus", "PySQL", "PyTorch", "R", "Rollbar", "Scikit-learn", "Sentry", "Sockets", "Sound Processing", "Spark", "Speech Deep Learning", "Speech Recognition", "TensorFlow", "Tensorflow", "Terraform", "Text-to-Speech", "Webpack", "Zeet.co", "ZeroMQ"],
      },
      "Design": {
            "Art Director": ["3D Modeling", "Agile", "Brand Strategy", "Design Sprint", "Design Systems", "Graphic Rendering", "Illustrator", "InDesign", "Motion Design", "Photoshop", "Presentation Design", "Prototyping", "Roadmapping", "Sketch", "Sound Processing", "Visual design", "Waterfall", "Wireframing"],
            "Brand Designer": ["Agile", "Brand Strategy", "Design Systems", "Graphic Rendering", "Illustrator", "InDesign", "Photoshop", "Presentation Design", "Sketch", "Visual design"],
            "Graphics Designer": ["3D Modeling", "Agile", "Graphic Rendering", "Illustrator", "InDesign", "Photoshop", "Presentation Design", "Prototyping", "Sketch", "Visual design"],
            "Industrial Designer": ["3D Modeling", "Agile", "AutoCAD", "Design Systems", "Illustrator", "InDesign", "Photoshop", "Sketch"],
            "Motion Designer": ["3D Modeling", "After Effects", "Agile", "Blender", "C4D", "Houdini", "Graphic Rendering", "Illustrator", "InDesign", "Maya", "Photoshop", "Premiere", "Sketch"],
            "Product Designer": ["Agile", "Amplitude", "Design Sprint", "Design Systems", "Illustrator", "InDesign", "Photoshop", "Presentation Design", "Prototyping", "Sketch", "Wireframing"],
            "UX Expert": ["Agile", "Amplitude", "UX Design", "Illustrator", "Photoshop", "Presentation Design", "Prototyping", "Sketch", "Wireframing"],
      },
      "Game Dev": {
            "Game Designer": ["3D Modeling", "Agile", "Blender", "C4D", "Houdini", "Graphic Rendering", "Illustrator", "Maya", "Mobile Game Design", "Photoshop", "Sketch", "Unity", "Unreal Engine"],
            "Game Developer": ["Agile", "Algorithm Design", "Ember.js", "ES6+", "Firebase", "Gatsby.js", "Graphic Rendering", "GraphQL", "JamStack", "JEST", "jQuery", "LESS", "Meteor.js", "MobX", "Next.js", "Nuxt", "PostCSS", "Preact", "React Flow", "Readymag", "Redux", "Rollbar", "Sails.js", "SASS", "Sentry", "Sockets", "Solid.js", "Sound Processing", "Storybook", "Svelte", "Tailwind CSS", "Unity", "Unreal Engine", "Visual Basic", "Webflow", "WebGL", "Webpack", "WebRTC", "WordPress", "Zod"],
      },
      "Product": {
            "Business Analyst": ["Agile", "Amplitude", "Bloomreach", "Mobile Analytics", "Prototyping", "User Research", "Web Analytics"],
            "Product Manager": ["Agile", "Amplitude", "Backlog Prioritization", "Bloomreach", "GTM Planning", "Presentation Design", "Product Analytics", "Product Design", "Product Marketing", "Product Strategy", "Prototyping", "Roadmapping", "Technical Writing and Documentation", "User Research", "Waterfall"],
            "Product Marketing Manager": ["Affiliate Marketing", "Agile", "Amplitude", "Backlog Prioritization", "Bloomreach", "GTM Planning", "Paid Ads", "Presentation Design", "Product Analytics", "Product Design", "Product Marketing", "Product Strategy", "Prototyping", "Roadmapping", "Rudderstack", "Segment"],
            "Product Owner": ["Agile", "Amplitude", "Apollo", "Backlog Prioritization", "Bloomreach", "Presentation Design", "Product Analytics", "Product Design", "Product Marketing", "Product Strategy", "Prototyping", "Roadmapping", "Technical Writing and Documentation", "User Research", "Waterfall"],
            "System Analyst": ["Agile", "ArangoDB", "Artifactory", "Computer Vision", "LaunchDarkly", "Prototyping", "Technical Writing and Documentation"],
            "Web & Mobile Analyst": ["Agile", "Amplitude", "GTM Planning", "Google Analytics", "Mobile Analytics", "NewRelic", "Rudderstack", "Web Analytics"],
      },
      "Business Development": {
            "Business Development": ["Agile", "Amplitude", "Apollo", "Content Development", "Customer Acquisition", "Expandi", "Google Analytics", "Hubspot", "LinkedIn Helper", "LinkedIn Sales Navigator", "Pipedrive", "Presentation Design", "Salesforce", "Seamless.io"],
      },
      "Marketing": {
            "Content Writer": ["Agile", "Content Development", "Contentful", "Contently", "Copywriting", "Technical Writing and Documentation"],
            "Growth Marketer": ["Affiliate Marketing", "Agile", "Amplitude", "Apollo", "Bloomreach", "Content Development", "Contentful", "Contently", "GTM Planning", "Marketing Strategy", "Paid Ads", "Segment", "Social Media Strategy", "User Research"],
            "Marketing Strategist": ["Affiliate Marketing", "Agile", "Amplitude", "Apollo", "Bloomreach", "Brand Strategy", "Content Development", "Contentful", "Contently", "Customer Acquisition", "GTM Planning", "Marketing Strategy", "Paid Ads", "Presentation Design", "Rudderstack", "Segment", "SEM", "SEO", "Social Media Strategy", "User Research"],
            "Online Marketing Expert": ["Agile", "Amplitude", "Apollo", "Bloomreach", "Content Development", "Contentful", "Contently", "Customer Acquisition", "GTM Planning", "Marketing Strategy", "Paid Ads", "Rudderstack", "Segment", "SEM", "SEO", "Social Media Strategy", "User Research"],
            "User Acquisition Manager": ["Affiliate Marketing", "Agile", "Amplitude", "Apollo", "Bloomreach", "Content Development", "Contentful", "Contently", "Customer Acquisition", "GTM Planning", "Marketing Strategy", "Paid Ads", "Segment", "SEM", "SEO", "Social Media Strategy"],
      }
};



function generateString(length) {
    let result = ' ';
    const charactersLength = characters.length;
    for ( let i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }

    return result;
}

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
  var topSkills = $("#performer-top-skills").parent().find('.ms-options input[type=checkbox]:checked').length;

  if(location.length > 5 && rate.length > 1 && mainRole && topSkills) {
    $("#sign-up-performer-submit").removeClass("inactive");
    return false;
  }
  
  $("#sign-up-performer-submit").addClass("inactive");
}

$(document).ready(function() {

  $('#sign-up-user').val(generateString(8));

  $('input[type=text], input[type=email], textarea').on('keyup', function (e) {
    checkNextButton();
    checkCustomerSubmitButton();
    checkPerformerSubmitButton();
  });

  $('#sign-up-conditions').on('change', function (e) {
    checkNextButton();
  });

  $('.ms-options input[type=checkbox]').on('change', function() {
    checkPerformerSubmitButton();
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

    console.log($("#sign-up-performer").hasClass("selected"));
    
    if($("#sign-up-customer").hasClass("selected")) {
      $("#sign-up-customer-form").removeClass("hidden");
      $('#user-customer').val( $('#sign-up-user').val() );
    }
    if($("#sign-up-performer").hasClass("selected")) {
      $("#sign-up-performer-form").removeClass("hidden");
      $('#user-performer').val( $('#sign-up-user').val() );
    }
    
    $("#sign-up-main-form").addClass("hidden");
    
    $('form[name=wf-form-Sign-Up-Form]').submit();
  });
  
  var customSelect = $(".custom-select");
  
  customSelect.each(function() {
  var thisCustomSelect = $(this),
        options = thisCustomSelect.find("option"),
        firstOptionText = options.first().text();


  var options = {};
  for (var category in skills) {
    options[category] = Object.keys(skills[category]);
  }

    var selectedItem = $("<div></div>", {
      class: "selected-item"
    }).appendTo(thisCustomSelect).text(firstOptionText);

    var allItems = $("<div></div>", {
      class: "all-items all-items-hide"
    }).appendTo(thisCustomSelect);

    for (var category in options) {

      var itemList = $("<div></div>", {
          class: "item-group"
      }).appendTo(allItems).text(category);

      for (var index in options[category]) {

        var optionText = options[category][index];

        var item = $("<div></div>", {
            class: "item",
            on: {
              click: function() {
                var selectedOptionText = $(this).text();
                selectedItem.text(selectedOptionText).removeClass("arrowanim");
                allItems.addClass("all-items-hide");
              }
            }
        }).appendTo(allItems).text(optionText);

      };

    };
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
    var opened = $(".all-items:not(.all-items-hide)"),
        index = opened.parent().index();

        customSelect.eq(index).find(".all-items").addClass("all-items-hide");
        customSelect.eq(index).find(".selected-item").removeClass("arrowanim");
  });
  
  $('#performer-top-skills').multiselect();

  $('.all-items .item').on('click', function() {
    var optionValue = $("#performer-main-role").parent().find('.selected-item').text();
    $('#performer-main-role').html(new Option(optionValue, optionValue, false, true));

    var category = $(this).prevAll(".item-group").eq(0).text();

    console.log(category);

    var options = [];
    if(skills[category] && skills[category][optionValue]) {
      for (var index in skills[category][optionValue]) {
        var skill = skills[category][optionValue][index];
        options.push({name: skill, value: skill});
      }
    }

    console.log(options);

    $("#performer-top-skills").multiselect('loadOptions', options);
    $('#performer-top-skills').multiselect('reload');
    
    checkPerformerSubmitButton();

  });

  $('#sign-up-performer-submit').on('click', function(e) {
    e.preventDefault();
    $("#performer-top-skills").parent().find('.ms-options input[type=checkbox]').remove();
    $('#wf-form-Sign-Up-Performer-Form').submit();
  });
  
});
