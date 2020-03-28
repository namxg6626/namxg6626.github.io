let issue = {
  id: 1,
  title: "task 1",
  description: "task 1",
  type: "task",
  priority: "high",
  allowFor: ["back_end", "front_end", "function_test", "performance_test"],
  createdBy: "Joo",
  assignee: "joo",
  estimate: "20/03/2020",
  state: "todo"
};
const updateBlock = document.getElementsByClassName("update")[0];

function showUpdate(show, e) {
  e.preventDefault();
  updateBlock.style.display = show ? "block" : "none";
  setIssueForm();
}

function setIssueForm() {
  const form = getIssueForm();
  for (let prop of [
    "title",
    "description",
    "createdBy",
    "assignee",
    "estimate",
    "type",
    "state",
    "priority"
  ])
    form[prop].value = issue[prop];

  for (let allowFor of form.allowFor)
    if (issue.allowFor.includes(allowFor.value)) allowFor.checked = true;
}

function save(e) {
  e.preventDefault();
  setIssueText();
  showUpdate(false, e);
}

function getIssueForm() {
  return document.form;
}

function setIssueText() {
  const form = getIssueForm();
  for (let prop of [
    "title",
    "description",
    "createdBy",
    "assignee",
    "estimate",
    "type",
    "state",
    "priority"
  ])
    issue[prop] = form[prop].value;

  const allowFor = [...form.allowFor].filter(x => x.checked);
  issue.allowFor = allowFor.map(x => x.value);

  let issueHTML = document.getElementsByTagName("pre")[0];
  issueHTML.textContent = JSON.stringify(issue, undefined, 4);
}
