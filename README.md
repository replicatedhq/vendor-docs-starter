**Deprecation notice:** This repo has been deprecated and is no longer maintained. For up-to-date guidance on writing documentation for applications distributed with Replicated, including examples and templates, see [Writing Great Documentation for On-Prem Software Distributed with Replicated](https://www.replicated.com/blog/writing-great-documentation-for-on-prem-software-distributed-with-replicated).

# Welcome to the Vendor Starter Documentation (Deprecated)

This repository contains documentation templates for software vendors distributing their application with Replicated. Vendors can use these templates to write documentation for their end users that describes how to install and manage their application.

## Table of Contents

* [Using the Templates](#using-the-templates)
* [About the Templates](#about-the-templates)
* [Documentation Examples](#documentation-examples)

## Using the Templates

To use the templates:

1. Copy the contents of the templates from the [`/templates`](/templates) directory of this repository and add them to your own documentation git repository.
1. Open the templates in a text editor, and use the instructions and guidance in the templates to add your app-specific documentation. 
1. Remove any sections from the templates that do not apply to your uses cases.

For more information, see [About the Templates](#about-the-templates) below.

## About the Templates

This section provides introductory information about the templates, including common use cases for each and additional guidance.

### Installation Requirements and Prerequisites

The installation documentation that you provide to your end users should include a topic that lists any installation requirements and prerequisites:
* **Prerequisites**: Tasks a user must complete before they begin installation.
* **Requirments**: Required specifications that your end users environment must meet in order to install.

Including a topic at the start of your installation docs that lists the requirements and prerequisites helps to avoid your customers running into errors or issues in the middle of installation process, which can cause frustration and confusion.

There are several requirements that apply to all applications distributed with Replicated, which are linked from the template. Add any additional requirements and prerequisites that are specific to your application. The template includes some examples to help you get started.

See [Installation Requirements and Prerequisites Template](/templates/installation-requirements.md).

### Configuring and Deploying the Application

As part of the installation process, your users provide their configuration preferences for your application on the Configuration screen in the admin console. After they configure the application, they can then run preflight checks and deploy.

The configuration options provided to your users are specific to your application. You define the configuration options when packaging your application with Replicated. For more information, see [About the Configuration Screen](https://docs.replicated.com/vendor/config-screen-about) in the Replicated documentation.

It is important to provide a topic in your documentation that includes a step-by-step procedure describing each field on the Configuration screen. This might include:
* Listing information that users need to gather before they can complete the fields on the Configuration screen.
* Describing the common use cases for why a user might choose one configuration option over another.
* Providing any recommendations that you have. 
* Clarifying requirements for any of the fields.

The template for this topic includes an outline of how to write this step-by-step procedure. It also includes a pre-written section on how to run preflight checks and deploy the application after configuring the application.

See [Configuring and Deploying the Application Template](/templates/app-configuration.md).

### Troubleshooting

The troubleshooting template provides an outline for writing a topic that helps your users to troubleshoot common errors. To make the troubleshooting topic easy to read and search, we recommend using a standard format of: Symptom, Cause, Solution.

One common use case for including a troubleshooting topic in your documentation is to provide additional guidance to users in how to correct and warnings or failures in your preflight checks.

See [Troubleshooting Template](/templates/troubleshooting.md).

## Documentation Examples

For additional guidance and documentation examples, see [Help creating Replicated Documentation For end user Kubernetes installs?](https://community.replicated.com/t/help-creating-replicated-documentation-for-end-user-kubernetes-installs/811/2#examples-3) on the Replicated Community site.
