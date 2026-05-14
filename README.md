# Agent Profiles - GitHub Web UI Guide

## ✅ Add a New Agent (Zero Terminal)

1. **Create JSON file**:
   - Go to repo → `agents/` folder → `Add file` → `Create new file`
   - Name: `newagent.json` (lowercase, no spaces)
   - Paste `template.json` content, update values
   - Commit directly to `main`

2. **Test**: Visit `yourdomain.com/newagent`
   - Redirects to `/i?d=newagent`
   - Profile loads dynamically

## 🗑️ Delete Old Files First
- Remove any `javeria.html`, `sarah.html`, etc. (we use ONE template now)
- Keep: `i.html`, `i.js`, `agent.css`, `footer2.css`, `404.html`

## 🔧 Edit Existing Agent
- Edit `agents/[name].json` directly on GitHub
- Changes live in ~60 seconds (no deploy needed)

## 🎨 Update Shared Styles
- Edit `agent.css` or `footer2.css` → affects ALL agents
- Commit → all profiles update instantly

## ❓ Troubleshooting
| Issue | Fix |
|-------|-----|
| 404 on `/agent-name` | Ensure `404.html` exists in repo root |
| JSON not loading | Check filename is lowercase: `agents/javeria.json` |
| Profile shows "Not Found" | Verify JSON structure matches template |
| Styles broken | Clear browser cache or hard reload (Ctrl+F5) |

## 🌐 URL Patterns That Work