var repoNameEl = document.querySelector('#repo-name');
var issueContainerEl = document.querySelector('#issues-container');
var limitWarningEl = document.querySelector('#limit-warning');

var getRepoName = function () {
  // https://developer.mozilla.org/en-US/docs/Web/API/Location/search
  // The search property of the Location interface is a search string, also called a query string; that is, a string containing a '?' followed by the parameters of the URL.
  var queryString = document.location.search;//repo=octocat/git-consortium
  var repoName = queryString.split('=')[1];//repo=octocat/hello-worId => ["repo", "octocat/hello-worId"]

  if (repoName) {
    repoNameEl.textContent = repoName;

    getRepoIssues(repoName);
  } else {
    document.location.replace('./index.html');
  }
};

var getRepoIssues = function (repo) {
  var apiUrl = 'https://api.github.com/repos/' + repo + '/issues?direction=asc';

  fetch(apiUrl).then(function (response) {
    if (response.ok) {
      response.json().then(function (data) {
        console.log("response", response);
        console.log("data", data);
        displayIssues(data);
        // https://developer.mozilla.org/en-US/docs/Web/API/Headers/get
        // https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Link
        // https://docs.github.com/en/rest/guides/traversing-with-pagination#basics-of-pagination
        console.log(response.headers.get('Link'));//<https://api.github.com/repositories/18221276/issues?direction=asc&page=2>; rel="next", <https://api.github.com/repositories/18221276/issues?direction=asc&page=2>; rel="last"
        if (response.headers.get('Link')) {
          displayWarning(repo);
        }
      });
    } else {
      // https://developer.mozilla.org/en-US/docs/Web/API/Location/replace
      // The replace() method of the Location interface replaces the current resource with the one at the provided URL.
      document.location.replace('./index.html');
    }
  });
};

var displayIssues = function (issues) {
  if (issues.length === 0) {
    issueContainerEl.textContent = 'This repo has no open issues!';
    return;
  }

  for (var i = 0; i < issues.length; i++) {
    var issueEl = document.createElement('a');
    issueEl.classList = 'list-item flex-row justify-space-between align-center';
    issueEl.setAttribute('href', issues[i].html_url);
    issueEl.setAttribute('target', '_blank');

    var titleEl = document.createElement('span');
    titleEl.textContent = issues[i].title;
    issueEl.appendChild(titleEl);

    var typeEl = document.createElement('span');

    if (issues[i].pull_request) {
      typeEl.textContent = '(Pull request)';
    } else {
      typeEl.textContent = '(Issue)';
    }

    issueEl.appendChild(typeEl);

    issueContainerEl.appendChild(issueEl);
  }
};

var displayWarning = function (repo) {
  limitWarningEl.textContent = 'To see more than 30 issues, visit ';

  var linkEl = document.createElement('a');
  linkEl.textContent = 'GitHub.com';
  linkEl.setAttribute('href', 'https://github.com/' + repo + '/issues');
  linkEl.setAttribute('target', '_blank');

  limitWarningEl.appendChild(linkEl);
};

getRepoName();
