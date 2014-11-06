/*******************************************************************************
 * @license
 * Copyright (c) 2013, 2014 IBM Corporation and others.
 * All rights reserved. This program and the accompanying materials are made 
 * available under the terms of the Eclipse Public License v1.0 
 * (http://www.eclipse.org/legal/epl-v10.html), and the Eclipse Distribution 
 * License v1.0 (http://www.eclipse.org/org/documents/edl-v10.html). 
 * 
 * Contributors: IBM Corporation - initial API and implementation
 ******************************************************************************/
/*eslint-env browser,amd*/

//NLS_CHARSET=UTF-8

define({
	"API URL": "API URL:",
	"Manage URL": "Manage URL:",
	"URLs": "URLs",
	"Cloud": "Cloud",
	"Cloud Foundry": "Cloud Foundry",
	"deploy.cf": "Deploy to Cloud Foundry",
	"deploy.cf.tooltip": "Deploy application in cloud.",
	"deploy.chooseSpace": "Choose Space To Deploy",
	"deploy.gettingSpaces": "Getting spaces...",
	"deploy.deploying": "Deploying...",
	"deploy.org": "Organization:",
	"deploy.setUpYourCloud": "Set up your Cloud. Go to [Settings](${0}).",
	"deploy.user": "User:",
	"deploy.password": "Password:",
	"deploy.enterCredentials": "Please enter your Cloud credentials below to authorize deployment.",
	"deploy.noSpaces": "No spaces found in this organization.",
	"deploy.spaceOrg": "${0} (${1})",
	"domain:": "Domain:",
	"host:": "Host:",
	"create": "Create",
	"createRoute": "Create route",
	"creatingRoute...": "Creating route...",
	"deleteAllUnmapped": "Delete All Unmapped",
	"deleteAllUnmappedRoutes": "Delete all unmapped routes",
	"deleteingAllUnmappedRoutes...": "Deleteing all unmapped routes...",
	"delete": "Delete",
	"deleteRoute": "Delete route",
	"deletingRoute...": "Deleting route...",
	"mapToApp": "Map to app",
	"addTheRouteToAn": "Add the route to an app",
	"loading...": "Loading...",
	"selectApplication": "Select Application",
	"mappingRouteToAnApp": "Mapping route to an app ...",
	"unmapFromApp": "Unmap from app",
	"removeTheRouteFromAn": "Remove the route from an app",
	"removingRouteFromAnApp": "Removing route from an app ...",
	"${0}On${1}/${2}": "${0} on ${1} / ${2}",
	"seeManualDeploymentInformationIn": "See Manual Deployment Information in the [root folder page](${0}) to view and manage [${1}](${2})",
	"theHostIsAlreadyIn": "The host is already in use by another application. Please check the host/domain in the manifest file.",
	"password:": "Password:",
	"Cancelled": "Cancelled",
	"Could not find the launch configuration manifest": "Could not find the launch configuration manifest nor use the top-level project manifest. Please restore it or provide a project manifest.",
	"Would you like to use the top-level project manifest": "Could not find the launch configuration manifest. Would you like to use the top-level project manifest instead and bind it to the launch configuration?",
	"iD:": "ID:",
	"setUpYourCloud.Go": "Set up your Cloud. Go to [Settings](${0}).",
	"loggingInTo${0}...": "Logging in to ${0}...",
	"submit": "Submit",
	"cloudApplications": "Cloud Applications",
	"loggingInToCloudFoundry": "Logging in to Cloud Foundry",
	"checkingForCloudFoundrySettings": "Checking for Cloud Foundry settings",
	"organization:": "Organization:",
	"space:": "Space:",
	"applications": "Applications",
	"unmappedRoutes": "Unmapped Routes",
	"deployingApplicationToCloudFoundry:": "Deploying application to Cloud Foundry: ",
	"applicationFrom/": "application from /",
	"on": " on ",
	"user:": "User:",
	"instance(s)Running": " instance(s) running",
	"of": " of ",
	"applicationIsNotRunning": "Application is not running",
	"${0}/${1}Instance(s)Running": "${0}/${1} instance(s) running",
	"${0}/${1}Instance(s)Running,${2}Flapping": "${0}/${1} instance(s) running, ${2} flapping",
	"youHaveNoApplicationsIn": "You have no applications in this space",
	"logs": "Logs",
	"started": "Started",
	"instancesRunning": " instances running",
	"stopped": "Stopped",
	"notDeployed": "Not deployed",
	"checkingApplicationState": "Checking application state",
	"stateUnknown": "State unknown",
	"youHaveNoOrphanRoutes": "You have no orphan routes in this space",
	"cloudFoundryLogs": "Cloud Foundry Logs",
	"logFiles": "Log Files",
	"noResponse": "No response",
	"gettingLogs": "Getting logs",
	"loginTo": "Login to ",
	"loggingInTo${0}": "Logging in to ${0}",
	"thisPluginIntegratesWithCloud": "This plugin integrates with Cloud Foundry.",
	"commandsForInteractingWithA": "Commands for interacting with a Cloud Foundry compatible target",
	"targetNotSet": "Target not set",
	"setOrDisplayTheTarget": "Set or display the target cloud, organization, and space",
	"targetURLToSwitchTo": "Target URL to switch to",
	"organization": "Organization",
	"space": "Space",
	"version:": "version: ",
	"support:": "support: ",
	"displayInformationOnTheCurrent": "Display information on the current target, user, etc.",
	"<none>": "<none>",
	"noOrgs.": "No orgs.",
	"listAllOrgs": "List all orgs",
	"loggedIn": "Logged in",
	"logUserIn": "Log user in",
	"username": "Username",
	"password": "Password",
	"loggedOut": "Logged out",
	"logUserOut": "Log user out",
	"noApplications.": "No applications.",
	"urls": "urls",
	"disk": "disk",
	"memory": "memory",
	"instances": "instances",
	"state": "state",
	"name": "name",
	"listAllAppsInThe": "List all apps in the target space",
	"usage:": "usage: ",
	"${0}Instance(s)": "${0} instance(s)",
	"url:": "url: ",
	"applicationNotFound": "Application not found",
	"displayHealthAndStatusFor": "Display health and status for app",
	"applicationToShowInformationFor": "Application to show information for",
	"pushANewAppOr": "Push a new app or sync changes to an existing app",
	"applicationToPush": "Application to push",
	"application${0}Started": "Application ${0} started",
	"problemsWhileStartingApplication${0}": "Problems while starting application ${0}",
	"startAnApplication": "Start an application",
	"applicationToStart": "Application to start",
	"application${0}Stopped": "Application ${0} stopped",
	"problemsWhileStoppingApplication${0}": "Problems while stopping application ${0}",
	"stopAnApplication": "Stop an application",
	"applicationToStop": "Application to stop",
	"noRoutes.": "No routes.",
	"apps": "apps",
	"domain": "Domain",
	"host": "host",
	"listAllRoutesInThe": "List all routes in the target space",
	"noRoutesFound": "No routes found",
	"created${0}At${1}": "Created ${0} at ${1}",
	"createAUrlRouteIn": "Create a url route in a space for later use",
	"hostname": "Hostname",
	"deleted${0}At${1}": "Deleted ${0} at ${1}",
	"deleteARoute": "Delete a route",
	"noOrphanedRoutes": "No orphaned routes",
	"deleteAllOrphanedRoutes(e.g.:": "Delete all orphaned routes (e.g.: those that are not mapped to an app)",
	"noRecentLogs.": "No recent logs.",
	"showRecentLogsForAn": "Show recent logs for an app",
	"applicationToShowLogsFor": "Application to show logs for",
	"cloudFoundryManifestContentAssist": "Cloud foundry manifest content assist",
	"cloudFoundryManifestValidator": "Cloud foundry manifest validator",
	"problemWhilePerformingTheAction": "Problem while performing the action",
	"applicationNameNotSet": "Application name not set",
	"appNameIsMissing": "App name is missing",
	"cloudFoundryLogin": "Cloud Foundry Login",
	"oK": "OK",
	"userId:": "User Id:",
	"instance:": "Instance: ",
	"root": "Root",
	"selectProjectToAdd": "Select Project to Add",
	"loading${0}": "Loading ${0}",
	"fetching${0}": "Fetching ${0}",
	"manifestTemplate": "Manifest template",
	"invalidIndentation:MixedSpacesAnd": "Invalid indentation: mixed spaces and tabs",
	"missingApplicationCommand": "Missing application command",
	"messageText": "messageText",
	"preparingDeploymentSettings...": "Preparing deployment settings...",
	"runtime:": "Runtime:",
	"node.js": "node.js",
	"target:": "Target:",
	"applicationName:": "Application Name:",
	"Click \"Deploy\" to proceed or \"Next\" to change the deployment parameters.": "Click \"Deploy\" to proceed or \"Next\" to change the deployment parameters.",
	"deploy": "Deploy",
	"configureApplicationDeployment": "Configure Application Deployment",
	"saveToManifestFile:": "Save to manifest file: ",
	"bindServicesFromTheList.": "Bind services from the list.",
	"availableServices:": "Available services:",
	"boundServices:": "Bound services:",
	"convertMyManifest.ymlFileTo": "Convert my manifest.yml file to v6",
	"loadingServices...": "Loading services...",
	"deploying...": "Deploying...",
	"command:": "Command:",
	"path:": "Path:",
	"buildpackUrl:": "Buildpack Url:",
	"memory:": "Memory:",
	"instances:": "Instances:",
	"timeout(sec):": "Timeout (sec):",
	"loadingDeploymentSettings...": "Loading deployment settings...",
	"target*:": "Target*:",
	"organization*:": "Organization*:",
	"space*:": "Space*:",
	"applicationName*:": "Application Name*:",
	"debugWith${0}:": "Debug with ${0}:",
	"requiredToPreventRandomAccess": "Required to prevent random access to cf-launcher",
	"uRLPrefix:": "URL Prefix: ",
	"leaveBlankForDefault": "Leave blank for default ${0}"
});
