import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { tools } from "./tools";

const server = new McpServer({
  name: "pokemon server",
  description: "A server that provides information about Pokemon.",
  version: "1.0.0",
});

for (const { name, config, handler } of tools) {
  server.registerTool(
    name,
    config,
    handler as Parameters<typeof server.registerTool>[2],
  );
}

const transport = new StdioServerTransport();
await server.connect(transport);
console.error("MCP Pokemon server started...");
