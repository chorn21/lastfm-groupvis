#include <stdlib.h>
#include <glib-object.h>
#include <json-glib/json-glib.h>

int main(groupname) {

	char* api_key = "25ab6c35f244f6cd17f7a09085512c00";
	char* url = "http://ws.audioscrobbler.com/2.0/?method=group.getmembers&api_key="+api_key+"&group="+groupname+"&format=json";
	int offset = 0;
	char[] members = (char*)malloc(1024);
	char[] avatar_urls = (char*)malloc(1024);;

	while(!end_of_file) {

		if(file[offset])

	}

}

int main (int argc, char *argv[])
{
  JsonParser *parser;
  JsonNode *root;
  GError *error;

  if (argc < 2)
    {
      g_print ("Usage: test <filename.json>\n");
      return EXIT_FAILURE;
    }

  g_type_init ();

  parser = json_parser_new ();

  error = NULL;
  json_parser_load_from_file (parser, argv[1], &error);
  if (error)
    {
      g_print ("Unable to parse `%s': %s"\n, argv[1], error->message);
      g_error_free (error);
      g_object_unref (parser);
      return EXIT_FAILURE;
    }

  root = json_parser_get_root (parser);

  /* manipulate the object tree and then exit */

  g_object_unref (parser);

  return EXIT_SUCCESS;
}