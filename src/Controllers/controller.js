'use strick';

let notices = [
  {
    id: 1,
    title: "a",
    content: "b"
  }
];

export const home = (req, res) => {
  res.render("home", { pageTitle: "Home", notices });
}

export const getUpload = (req, res) => {
  return res.render("upload");
}

export const postUpload = (req, res) => {
  const title = req.body.title;
  const content = req.body.content;
  if (title && content) {
    const notice = {
      id: notices.length + 1,
      title,
      content
    }
    notices.push(notice);
    return res.redirect("/");
  }
}

export const see = (req, res) => {
  const id = req.params.id;
  const notice = notices.find((el) => el.id === Number(id));
  console.log(notice);
  if (notice) {
    return res.render("see", { pageTitle: `See ${notice.title}`, notice });
  }
  return res.redirect("/");
}

export const getEdit = (req, res) => {
  const id = req.params.id;
  const notice = notices.find((el) => el.id === Number(id));
  if (notice) {
    return res.render("edit", { pageTitle: `Edit ${notice.title}`, notice });
  }
  return res.redirect("/");
}

export const postEdit = (req, res) => {
  const title = req.body.title;
  const content = req.body.content;
  const id = req.params.id;
  if (title && content) {
    const notice = notices.find((el) => el.id === Number(id));
    notice.title = title;
    notice.content = content;
    return res.redirect("/");
  }
}

export const deleteNotice = (req, res) => {
  const {
    params: { id },
  } = req;
  if (id) {
    const index = notices.findIndex((el) => el.id === Number(id));
    notices.splice(index, 1);
    return res.redirect("/");
  }
}