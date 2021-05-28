(window.webpackJsonp=window.webpackJsonp||[]).push([[90],{161:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return p}));var a=n(3),o=n(7),r=(n(0),n(192)),i={id:"docker_install_simple",title:"Docker Default Installation Guide",sidebar_label:"Docker Simple"},l={unversionedId:"deploy/docker_install_simple",id:"version-1.2.9/deploy/docker_install_simple",isDocsHomePage:!1,title:"Docker Default Installation Guide",description:"In this deployment guide, you will learn how to deploy a basic Netsage setup that includes one sflow and/or one netflow collector.  If you have more than one collector of either type, or other special situations, see the Docker Advanced guide.",source:"@site/versioned_docs/version-1.2.9/deploy/docker_install_simple.md",slug:"/deploy/docker_install_simple",permalink:"/netsage-pipeline/docs/1.2.9/deploy/docker_install_simple",editUrl:"https://github.com/netsage-project/netsage-pipeline/edit/master/website/versioned_docs/version-1.2.9/deploy/docker_install_simple.md",version:"1.2.9",sidebar_label:"Docker Simple",sidebar:"version-1.2.9/Pipeline",previous:{title:"NetSage Flow Processing Pipeline Installation Guide",permalink:"/netsage-pipeline/docs/1.2.9/deploy/bare_metal_install"},next:{title:"Docker Advanced Installation Guide",permalink:"/netsage-pipeline/docs/1.2.9/deploy/docker_install_advanced"}},s=[{value:"1. Set up Data Sources",id:"1-set-up-data-sources",children:[]},{value:"2. Clone the Netsage Pipeline Project",id:"2-clone-the-netsage-pipeline-project",children:[]},{value:"3. Create Docker-compose.override.yml",id:"3-create-docker-composeoverrideyml",children:[]},{value:"4. Create Environment File",id:"4-create-environment-file",children:[]},{value:"5. Choose Pipeline Version",id:"5-choose-pipeline-version",children:[]},{value:"Running the Collectors",id:"running-the-collectors",children:[{value:"Running the Collectors and Pipeline",id:"running-the-collectors-and-pipeline",children:[]}]},{value:"Upgrading",id:"upgrading",children:[]}],c={toc:s};function p(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"In this deployment guide, you will learn how to deploy a basic Netsage setup that includes one sflow and/or one netflow collector.  If you have more than one collector of either type, or other special situations, see the Docker Advanced guide."),Object(r.b)("p",null,"The Docker containers included in the installation are"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"rabbit    (the local RabbitMQ server)"),Object(r.b)("li",{parentName:"ul"},"sflow-collector   (receives sflow data and writes nfcapd files)"),Object(r.b)("li",{parentName:"ul"},"netflow-collector   (receives netflow data and writes nfcapd files)"),Object(r.b)("li",{parentName:"ul"},"importer   (reads nfcapd files and puts flows into a local rabbit queue)"),Object(r.b)("li",{parentName:"ul"},"logstash   (logstash pipeline that processes flows and sends them to, by default, netsage-elk1.grnoc.iu.edu)"),Object(r.b)("li",{parentName:"ul"},"ofelia   (cron-like downloading of files used by the logstash pipeline)")),Object(r.b)("p",null,"The code and configs for the importer and logstash pipeline can be viewed in this github repo (netsage-project/netsage-pipeline). See netsage-project/docker-nfdump-collector for code related to the collectors."),Object(r.b)("h3",{id:"1-set-up-data-sources"},"1. Set up Data Sources"),Object(r.b)("p",null,"The data processing pipeline needs data to ingest in order to do anything, of course. There are three types of data that can be consumed."),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"sflow "),Object(r.b)("li",{parentName:"ul"},"netflow"),Object(r.b)("li",{parentName:"ul"},"tstat")),Object(r.b)("p",null,"At least one of these must be set up on a sensor to provide the incoming flow data.\nYou can do this step later, but it will helpful to have it working first. "),Object(r.b)("p",null,"Sflow and netflow data should be exported to the pipeline host where there are collectors (nfcapd and/or sfcapd processes) ready to receive it (see below). To use the default settings, send sflow to port 9998 and netflow to port 9999. On the pipeline host, allow incoming traffic from the flow exporters, of course."),Object(r.b)("p",null,"Tstat data should be sent directly to the logstash input RabbitMQ queue on the pipeline host. No collector is needed for tstat data. From there, logstash will grab the data and process it the same way as it processes sflow/netflow data. (See the Docker Advanced guide.)"),Object(r.b)("h3",{id:"2-clone-the-netsage-pipeline-project"},"2. Clone the Netsage Pipeline Project"),Object(r.b)("p",null,"If you haven't already, install ",Object(r.b)("a",{parentName:"p",href:"https://www.docker.com"},"Docker")," and ",Object(r.b)("a",{parentName:"p",href:"https://docs.docker.com/compose/install/"},"Docker Compose")," and clone this project"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-sh"},"git clone https://github.com/netsage-project/netsage-pipeline.git\n")),Object(r.b)("p",null,"(If you are upgrading to a new release, see the Upgrade section below!)"),Object(r.b)("p",null,"Then checkout the right version of the code."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-sh"},"git checkout tag_name\n")),Object(r.b)("p",null,'Replace "tag_name" with the release version you intend to use, e.g., "v1.2.8".  ("Master" is the development version and is not intended for general use!)\n',Object(r.b)("inlineCode",{parentName:"p"},"git status")," will confirm which branch you are on, e.g., master or v1.2.8."),Object(r.b)("h3",{id:"3-create-docker-composeoverrideyml"},"3. Create Docker-compose.override.yml"),Object(r.b)("p",null,"Information in the ",Object(r.b)("inlineCode",{parentName:"p"},"docker-compose.yml")," file tells docker which containers (processes) to run and sets various parameters for them.\nSettings in the ",Object(r.b)("inlineCode",{parentName:"p"},"docker-compose.override.yml")," file will overrule and add to those. Note that docker-compose.yml should not be edited since upgrades will replace it. Put all customizations in the override file, since override files will not be overwritten."),Object(r.b)("p",null,"Collector settings may need to be edited by the user, so the information that docker uses to run the collectors is specified (only) in the override file. Therefore, docker-compose_override.example.yml must always be copied to docker-compose_override.yml. "),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-sh"},"cp docker-compose.override_example.yml docker-compose.override.yml\n")),Object(r.b)("p",null,"By default docker will bring up a single netflow collector and a single sflow collector. If this matches your case, you don't need to make any changes to the docker-compose.override_example.yml. If you have only one collector, remove or comment out the section for the one not needed so the collector doesn't run and simply create empty nfcapd files."),Object(r.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(r.b)("div",{parentName:"div",className:"admonition-heading"},Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",{parentName:"h5",className:"admonition-icon"},Object(r.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),Object(r.b)("div",{parentName:"div",className:"admonition-content"},Object(r.b)("p",{parentName:"div"},"If you only have one collector, you should remove or comment out the section for the collector that is not used."))),Object(r.b)("p",null,"This file also specifies port numbers, and directories for nfcapd files.  By default, the sflow collector will listen to udp traffic on localhost:9998, while the netflow collector will listen on port 9999,  and data will be written to ",Object(r.b)("inlineCode",{parentName:"p"},"/data/input_data/"),". Each collector is namespaced by its type so the sflow collector will write data to ",Object(r.b)("inlineCode",{parentName:"p"},"/data/input_data/sflow/")," and the netflow collector will write data to ",Object(r.b)("inlineCode",{parentName:"p"},"/data/input_data/netflow/"),".  "),Object(r.b)("p",null,"Other lines in this file you can ignore for now. "),Object(r.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(r.b)("div",{parentName:"div",className:"admonition-heading"},Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",{parentName:"h5",className:"admonition-icon"},Object(r.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),Object(r.b)("div",{parentName:"div",className:"admonition-content"},Object(r.b)("p",{parentName:"div"},"You may need to remove all the comments in the override file as they may conflict with the parsing done by docker-compose"))),Object(r.b)("h3",{id:"4-create-environment-file"},"4. Create Environment File"),Object(r.b)("p",null,Object(r.b)("p",{parentName:"p"},"Please copy ",Object(r.b)("inlineCode",{parentName:"p"},"env.example")," to ",Object(r.b)("inlineCode",{parentName:"p"},".env"),"  "),Object(r.b)("pre",{parentName:"p"},Object(r.b)("code",{parentName:"pre",className:"language-sh"},"cp env.example .env \n")),Object(r.b)("p",{parentName:"p"},"then edit the .env file to set the sensor names"),Object(r.b)("pre",{parentName:"p"},Object(r.b)("code",{parentName:"pre",className:"language-sh"},"sflowSensorName=my sflow sensor name\nnetflowSensorName=my netflow sensor name\n")),Object(r.b)("p",{parentName:"p"},"Simply change the names to unique identifiers (with spaces or not, no quotes) and you're good to go. "),Object(r.b)("div",{parentName:"p",className:"admonition admonition-note alert alert--secondary"},Object(r.b)("div",{parentName:"div",className:"admonition-heading"},Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",{parentName:"h5",className:"admonition-icon"},Object(r.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),Object(r.b)("div",{parentName:"div",className:"admonition-content"},Object(r.b)("p",{parentName:"div"},"These names uniquely identify the source of the data. In elasticsearch, they are saved in the ",Object(r.b)("inlineCode",{parentName:"p"},"meta.sensor_id"),' field and will be shown in Grafana dashboards. Choose names that are meaningful and unique.\nFor example, your sensor names might be "RNDNet New York Sflow" and "RNDNet Boston Netflow" or "rtr.one.rndnet.edu" and "rtr.two.nrdnet.edu". Whatever makes sense in your situation.'))),Object(r.b)("ul",{parentName:"p"},Object(r.b)("li",{parentName:"ul"},"If you don't set a sensor name, the default docker hostname, which changes each time you run the pipeline, will be used. "),Object(r.b)("li",{parentName:"ul"},"If you have only one collector, remove or comment out the line for the one you are not using."),Object(r.b)("li",{parentName:"ul"},'If you have more than one of the same type of collector, see the "Docker Advanced" documentation.')),Object(r.b)("p",{parentName:"p"},"Other settings of note in this file include the following. You will not necessarily need to change these, but be aware."),Object(r.b)("p",{parentName:"p"},Object(r.b)("strong",{parentName:"p"},"rabbit_output_host"),": this defines where the final data will land after going through the pipeline.  By default, the last rabbit queue will be on ",Object(r.b)("inlineCode",{parentName:"p"},"rabbit"),", ie, the local rabbitMQ server running in its docker container. Enter a hostname to send to a remote rabbitMQ server (also the correct username, password, and queue key/name)."),Object(r.b)("p",{parentName:"p"},"The following Logstash Aggregation Filter settings are exposed in case you wish to use different values.\n(See comments in the ","*","-aggregation.conf file.) The aggregation filter stitches together long-lasting flows that are seen in multiple nfcapd files, matching by the 5-tuple (source and destination IPs, ports, and protocol) plus sensor name. "),Object(r.b)("p",{parentName:"p"},Object(r.b)("strong",{parentName:"p"},"Aggregation_maps_path"),": the name of the file to which logstash will write in-progress aggregation data when logstash shuts down. When logstash starts up again, it will read this file in and resume aggregating. The filename is configurable for complex situations, but /data/ is required.  "),Object(r.b)("p",{parentName:"p"},Object(r.b)("strong",{parentName:"p"},"Inactivity_timeout"),": If more than inactivity_timeout seconds have passed between the 'start' of a flow and the 'start'\nof the LAST matching flow, OR if no matching flow has coming in for inactivity_timeout seconds\non the clock, assume the flow has ended."),Object(r.b)("div",{parentName:"p",className:"admonition admonition-note alert alert--secondary"},Object(r.b)("div",{parentName:"div",className:"admonition-heading"},Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",{parentName:"h5",className:"admonition-icon"},Object(r.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),Object(r.b)("div",{parentName:"div",className:"admonition-content"},Object(r.b)("p",{parentName:"div"},"Nfcapd files are typically written every 5 minutes. Netsage uses an inactivity_timeout = 630 sec = 10.5 min for 5-min files; 960 sec = 16 min for 15-min files.  (For 5-min files, this allows one 5 min gap or period during which the no. of bits transferred don't meet the cutoff)"))),Object(r.b)("p",{parentName:"p"},Object(r.b)("strong",{parentName:"p"},"max_flow_timeout"),": If a long-lasting flow is still aggregating when this timeout is reached, arbitrarily cut it off and start a new flow.  The default is 24 hours.")),Object(r.b)("h3",{id:"5-choose-pipeline-version"},"5. Choose Pipeline Version"),Object(r.b)("p",null,"Once you've created the docker-compose.override.xml file and finished adjusting it for any customizations, you're ready to select which version Docker should run."),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-sh"},"./scripts/docker_select_version.sh\n")),Object(r.b)("p",null,"When prompted, select the ",Object(r.b)("strong",{parentName:"p"},"same version")," you checked out earlier.\nThis script will replace the version numbers of docker images in the docker-compose files with the correct values."),Object(r.b)("h2",{id:"running-the-collectors"},"Running the Collectors"),Object(r.b)("p",null,"After selecting the version to run, you can start the two flow collectors by themselves by running the following line. If you only need one of the collectors, remove the other from this command. "),Object(r.b)("p",null,"(Or see the next section for how to start all the containers, including the collectors.)"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-sh"},"docker-compose up -d sflow-collector netflow-collector\n")),Object(r.b)("p",null,"If the collector(s) are running properly, you should see nfcapd files in subdirectories of data/input_data/, and they should have sizes of more than a few hundred bytes. (See Troubleshooting if you have problems.)"),Object(r.b)("h3",{id:"running-the-collectors-and-pipeline"},"Running the Collectors and Pipeline"),Object(r.b)("p",null,Object(r.b)("p",{parentName:"p"},"Start up the pipeline (all containers) using:"),Object(r.b)("pre",{parentName:"p"},Object(r.b)("code",{parentName:"pre",className:"language-sh"},"docker-compose up -d\n")),Object(r.b)("p",{parentName:"p"},'This will also restart any containers/processes that have died. "-d" runs containers in the background.'),Object(r.b)("p",{parentName:"p"},"You can see the status of the containers and whether any have died (exited) using"),Object(r.b)("pre",{parentName:"p"},Object(r.b)("code",{parentName:"pre",className:"language-sh"},"docker-compose ps\n")),Object(r.b)("p",{parentName:"p"},"To check the logs for each of the containers, run"),Object(r.b)("pre",{parentName:"p"},Object(r.b)("code",{parentName:"pre",className:"language-sh"},"docker-compose logs\n")),Object(r.b)("p",{parentName:"p"},"Add ",Object(r.b)("inlineCode",{parentName:"p"},"-f")," or, e.g., ",Object(r.b)("inlineCode",{parentName:"p"},"-f logstash")," to see new log messages as they arrive.  ",Object(r.b)("inlineCode",{parentName:"p"},"--timestamps"),", ",Object(r.b)("inlineCode",{parentName:"p"},"--tail"),",  and ",Object(r.b)("inlineCode",{parentName:"p"},"--since")," are also useful -- look up details in Docker documentation."),Object(r.b)("p",{parentName:"p"},"To shut down the pipeline (all containers) use"),Object(r.b)("pre",{parentName:"p"},Object(r.b)("code",{parentName:"pre",className:"language-sh"},"docker-compose down\n"))),Object(r.b)("h2",{id:"upgrading"},"Upgrading"),Object(r.b)("p",null,Object(r.b)("h3",{parentName:"p"},"Shut things down"),Object(r.b)("pre",{parentName:"p"},Object(r.b)("code",{parentName:"pre",className:"language-sh"},"cd {netsage-pipeline directory}\ndocker-compose down\n")),Object(r.b)("p",{parentName:"p"},"This will stop all the docker containers, including the importer, logstash, and any collectors. Note that incoming flow data will not be saved during the time the collectors are down."),Object(r.b)("h3",{parentName:"p"},"Update Source Code"),Object(r.b)("p",{parentName:"p"},"To upgrade to a new release, just reset and pull changes including the new release from github. Your customized .env and override files will not be overwritten."),Object(r.b)("pre",{parentName:"p"},Object(r.b)("code",{parentName:"pre",className:"language-sh"},"git reset --hard\ngit pull origin master\n")),Object(r.b)("div",{parentName:"p",className:"admonition admonition-warning alert alert--danger"},Object(r.b)("div",{parentName:"div",className:"admonition-heading"},Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",{parentName:"h5",className:"admonition-icon"},Object(r.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},Object(r.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"warning")),Object(r.b)("div",{parentName:"div",className:"admonition-content"},Object(r.b)("p",{parentName:"div"},"git reset --hard will obliterate any changes you have made to non-override files.  If necessary, please make sure you commit and save to a feature branch before continuing."),Object(r.b)("p",{parentName:"div"},"Example:\n",Object(r.b)("inlineCode",{parentName:"p"},'git commit -a -m "Saving local state"; git checkout -b feature/backup; git checkout master')))),Object(r.b)("h3",{parentName:"p"},"Check/Update Files"),Object(r.b)("ul",{parentName:"p"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},'Compare the new docker-compose.override_example.yml file to your docker-compose.override.yml to see if a new version of Docker is required. Look for, eg, version: "3.7" at the top. If the version number is different, change it in your docker-compose.override.yml file and upgrade Docker manually.')),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},'In the same files, see if the version of nfdump has changed. Look for lines like "image: netsage/nfdump-collector:1.6.18". If there has been a change, update the version in the override file. (You do not need to actually perform any update yourself.)\nNote that you do not need to update the versions of the importer or logstash images. That will be done for you in the "select release version" stop coming up.')),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Also compare your .env file with the new env.example file to see if any new lines or sections have been added. Copy new lines into your .env file, making any appropriate changes to example values.")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"If you used the Docker Advanced guide to make a netsage_override.xml file, compare it to netsage_shared.xml to see if there are any changes. This is unlikely."))),Object(r.b)("h3",{parentName:"p"},"Select Release Version"),Object(r.b)("p",{parentName:"p"},'Run these two commands to select the new release you want to run. In the first, replace "tag_value" by the version to run (eg, v1.2.8). When asked by the second, select the same version as the tag you checked out.'),Object(r.b)("pre",{parentName:"p"},Object(r.b)("code",{parentName:"pre",className:"language-sh"},"git checkout -b tag_value \ngit pull\n./scripts/docker_select_version.sh\n")),Object(r.b)("p",{parentName:"p"},"Check to be sure docker-compose.yml and docker-compose.override.yml both now have the version number you selected.  "),Object(r.b)("h3",{parentName:"p"},"Update Docker Containers"),Object(r.b)("p",{parentName:"p"},"Do not forget this step!  This applies for both development and release versions."),Object(r.b)("pre",{parentName:"p"},Object(r.b)("code",{parentName:"pre"},"docker-compose pull\n")),Object(r.b)("h3",{parentName:"p"},"Restart Docker Containers"),Object(r.b)("pre",{parentName:"p"},Object(r.b)("code",{parentName:"pre"},"docker-compose up -d\n")),Object(r.b)("p",{parentName:"p"},"This will start all the services/containers listed in the docker-compose.yml and docker-compose.override.yml files, including the importer, logstash pipeline, and collectors."),Object(r.b)("h3",{parentName:"p"},"Delete old images"),Object(r.b)("p",{parentName:"p"},"To save space, delete any old images that are not needed. ")))}p.isMDXComponent=!0},192:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return h}));var a=n(0),o=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=o.a.createContext({}),p=function(e){var t=o.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=p(e.components);return o.a.createElement(c.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=o.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(n),m=a,h=d["".concat(i,".").concat(m)]||d[m]||b[m]||r;return n?o.a.createElement(h,l(l({ref:t},c),{},{components:n})):o.a.createElement(h,l({ref:t},c))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<r;c++)i[c]=n[c];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);